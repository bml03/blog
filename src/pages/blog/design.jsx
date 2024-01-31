export default function index() {
  return <div>index</div>;
}

export async function getServerSideProps(context) {
  const { query } = context;
  const response = await fetch(` https://dev.to/api/articles`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}

