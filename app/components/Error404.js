export function Error404(){
    const d=document,
    $error404=d.createElement("div");
    $error404.id="error404";
    $error404.classList.add("row","justify-content-center","align-items-center","mt-2");
    $error404.classList.add("d-flex", "align-items-center", "justify-content-center", "vh-100");

    

    $error404.innerHTML=`
    <div class="text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
        <p class="lead">
            The page you’re looking for doesn’t exist.
        </p>
        <a href="index.html" class="btn btn-primary">Go Home</a>
    </div>
    `;

    return $error404;

}