export default ({ data }) => {
  const { html_url, full_name, owner } = data
  return (<div>
    <a href={html_url} target="_blank">{full_name}</a>
    <span>by</span>
    <a href={owner.html_url} target="_blank">{owner.login}</a>
  </div>)
}

