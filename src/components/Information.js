import React from 'react'
import './Styles/Information.css'
export default function Information() {
  return (
    <div className="information">
      <form>
        <div className="form-group">
          <label for="uname">Tên sách:</label>
          <input type="text" className="form-control" id="uname"  placeholder="Vui lòng điền tên sách"/>
        </div>
        <div className="form-group">
          <label for="nameBook">Tác Phẩm:</label>
          <input type="text" className="form-control" id="nameBook" placeholder="Vui lòng điền tên tác phẩm"/>
        </div>
        <div className="form-group">
          <label for="nameAuthor">Tác Giả:</label>
          <input type="text" className="form-control" id="nameAuthor" placeholder="Vui lòng điền tên tác giả"/>
        </div>
        <div class="form-group">
          <label htmlFor="choose-file" className="image-book">
            <i class="fas fa-image"></i>
            Thêm ảnh bìa
          </label>
          <input type="file" class="form-control-file display-none" name="" id="choose-file"/>
        </div>
        <div className="preview-image"></div><br />
        <button type="submit" className="btn btn-primary">Lưu</button>
      </form>
    </div>
  )
}
