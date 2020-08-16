import React from 'react'
import './Styles/Action.css'
export default function Action() {
  return (
    <div className="action">
      <button className="btn-action">
        <i className="fa fa-plus" aria-hidden="true"></i>
        Thêm người mượn
      </button>
      <button className="btn-action">
        <i className="fa fa-book" aria-hidden="true"></i>
        Thêm sách
      </button>
      <button className="btn-action">
        <i className="fa fa-outdent" aria-hidden="true"></i>
        Trả sách
      </button>
    </div>
  )
}
