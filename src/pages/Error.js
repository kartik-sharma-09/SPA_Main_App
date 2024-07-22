import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageComponent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();

  let title = "An Error occurred";
  let message = "Something Went Wrong !";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 400) {
    title = "Not Found";
    message = "Could not find resource or page ";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
