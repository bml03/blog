export default function Page(props) {
  const { data } = props;
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  console.log(query);
  const response = await fetch(` https://dev.to/api/articles`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
