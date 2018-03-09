const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () =>
  layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div>Author: <input name="author" type="text"/></div>

    <div>Email: <input name="email" type="text"/></div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div>Content: <input name="content" type="text"/></div>

    <div>Page status: <input name="status" type="text"/></div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
