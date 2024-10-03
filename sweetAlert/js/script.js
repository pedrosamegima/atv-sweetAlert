function ModalSuccess(){
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    }
function ModalWarning(){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });

}
function ModalHtml(){
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        html: `
         <link rel="stylesheet" href="css/style.css">
        <img  class="img" src="img/neymar1.webp" alt="" srcset="">
        `
      });
}