import React from 'react'

function Filter() {
  return (
  <>
    <div className="select_box d-flex">
                  <select className="form-control">
                    <option>Filter by Type</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <select className="form-control">
                    <option>Filter by Category</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <select className="form-control">
                    <option>Filter by Price</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <select className="form-control">
                    <option>Filter by Distance (miles)</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
  </>
  )
}

export default Filter