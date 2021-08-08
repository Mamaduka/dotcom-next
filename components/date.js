import tinytime from 'tinytime';

const template = tinytime('{MMMM} {DD}, {YYYY}');

export default function PostDate({ dateString }) {
  const date = new Date(dateString);
  return <time dateTime={dateString}>{template.render(date)}</time>;
}
