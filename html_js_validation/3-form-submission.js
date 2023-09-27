<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="form-submission.js"></script>

    <title>3. Form Submission Handling</title>
  </head>
  <body>
    <form id="submitForm" onsubmit="return false;">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
     
      <button type="submit">Submit</button>
    </form>
    <p id="error" style="color: red"></p>
    <p id="success" style="color: green"></p>
  </body>
</html>
