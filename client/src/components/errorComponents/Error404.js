import classes from "./Error.module.css";

const Error404 = () => {
  return (
    <section className={`${classes.error_404} container text-center`}>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className={classes.error_page}>
            <h1 className={classes.error_number}>404</h1>
            <h2>Page Not Found</h2>
            <p>
              Sorry, but the page you are looking for does not exist, have been
              removed, name changed or is temporarity unavailable.
            </p>
            <a href="/" className="btn btn-warning">
              Go to Homepage
            </a>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </section>
  );
};

export default Error404;
