async function main() {
  const response = await fetch("https://countries.trevorblades.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          countries {
            capital
          }
        }             
        `,
    }),
  }).then((res) => res.json());

  const app = document.getElementById("app") as HTMLElement;
  app.innerHTML = `
  <pre>${JSON.stringify(response, null, 2)}</pre>
  `;
}

main();
