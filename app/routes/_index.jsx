import { Link } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "Remix Test App" },
    { name: "description", content: "Hey there!! great to see you!!" },
  ];
};

export default function Index() {
  return (
    <>
      <h1>Hello VB</h1>
      <Link to="/demo">Go to Demo</Link>
    </>
  );
}