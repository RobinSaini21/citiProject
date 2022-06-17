import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Hastags() {
  return (
    <div className="App">
      <InviteFriends />
    </div>
  );
}

const initialValues = {
  friends: [
    {
      name: "",
    },
  ],
};

const InviteFriends = () => {
  const [hastag, setHastage] = useState("");
  const [names, setnames] = useState([]);

  return (
    <div>
      <Formik
        initialValues={initialValues}

        validate={() => ({ foo: true })}
        onSubmit={(values) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
        render={({ values, errors, touched, handleReset,  }) => {
          console.group("formik");
          console.log("touched", touched);
          console.log("values", values);
          console.groupEnd("formik");
          return (
            <Form>
              <FieldArray
                name="friends"
                render={({ insert, remove, push }) => (
                  <>
                    <div class="form-group">
                      <div class="d-flex add_box">
                        <input
                          className="form-control"
                          type="text"
                          value={hastag}
                          onChange={(e) => setHastage(e.target.value)}
                          placeholder="#Hastag"
                        />
                        <button
                          type="button"
                          class="btn blue_btn"
                          onClick={() => {
                            push({ name: hastag });
                            setHastage("");
                          }}
                        >
                          Add
                        </button>
                      </div>
                      <small class="form-text">Add upto 5 hastag</small>
                      <div class="hastags">
                        {values.friends.length > 0 &&
                          values.friends.map((friend, index) => (
                            <a  title="" class="hastag_btn" onClick={() => remove(index)}>
                               {values.friends[index].name} 
                              <img src="/img/close_icon.svg" alt="" />
                            </a>
                          ))}
                        {errors.friends &&
                          errors.friends[index] &&
                          errors.friends[index].name &&
                          touched.friends &&
                          touched.friends[index].name && (
                            <div className="field-error">
                              {errors.friends[index].name}
                            </div>
                          )}
                      </div>
                    </div>
                  </>
                )}
              />
            </Form>
          )
        }}
      />
    </div>
  );
};

{
  /* <div className="d-flex add_box">
<input
  value={hastag}
  
  onChange={(e, value) => {
    setHastage(e.target.value);
    
  }}
  className="form-control"
  type="text"
/>

<button
  type="button"
  onClick={handlehashtags}
  className="btn blue_btn"
>
  Add
</button>
</div>
<small className="form-text">Add upto 5 hastag</small>

<small className="form-text text-danger">
{validate.validateHasTags}
</small>

<div className="hastags">
{hastags.length === 0
  ? null
  : hastags.map((data, idx) => (
      <a key={idx} title="" className="hastag_btn">
        #{data}
        <img
          src="/img/close_icon.svg"
          alt=""
          onClick={() => {
            const filiteredhas = hastags.filter(
              (hastags_) => hastags_ !== data
            );
            setHastages(filiteredhas);
          }}
        />
      </a>
    ))}
</div> */
}

// {values.friends[index].name}
