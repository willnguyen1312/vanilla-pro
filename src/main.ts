async function main() {
  const response = await fetch("https://www.learnwithjason.dev/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query GetLearnWithJasonEpisodes($now: DateTime!) {
            allEpisode(limit: 10, sort: {date: ASC}, where: {date: {gte: $now}}) {
              date
              title
              guest {
                name
                twitter
              }
              description
            }
          }
        `,
      variables: {
        now: new Date().toISOString(),
      },
    }),
  }).then((res) => res.json());

  const app = document.getElementById("app") as HTMLElement;
  app.innerHTML = `
  <pre>${JSON.stringify(response, null, 2)}</pre>
  `;
}

main();
