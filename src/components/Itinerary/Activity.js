import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import ActivityForm from "./components/ActivityForm";

function Activity() {
  const initialValues = {
    activities: [
      {
        experiencename: " ",
        date: "",
        arrivetime: "",
        departtime: "",
        address: {},
        activitydescription: "",
        phonenumber: "",
        costperperson: "",
        hastags: [],
      },
    ],
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          activities: Yup.array().of(
            Yup.object().shape({
              experiencename: Yup.string().required("Requried"),
              date: Yup.string().required("Requried"),
            })
          ),
        })}
        onSubmit={async (values) => {
          console.log(values);
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            <FieldArray name="activities">
              {({ insert, remove, push }) => (
                <div>
                  {values.activities.length > 0 &&
                    values.activities.map((activities, index) => {
                      const handleadd = () =>
                        push({
                          experiencename: " ",
                          date: "",
                          arrivetime: "",
                          departtime: "",
                          address: {},
                          activitydescription: "",
                          phonenumber: "",
                          costperperson: "",
                          hastags: [],
                        });
                      const handleremove = () => remove(index);
                      return (
                        <div key={index}>
                          <ActivityForm
                            idx={index}
                            length={values.activities.length}
                            recreate={handleadd}
                            destroy={handleremove}
                          />
                        </div>
                      );
                    })}
                </div>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Activity;
