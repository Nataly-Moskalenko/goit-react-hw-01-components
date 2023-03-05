import css from './Statistics.module.css';

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 1)}`;
// }

// function generateLightColorHex() {
//   let color = "#";
//   for (let i = 0; i < 3; i++)
//     color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
//   return color;
// }

// function generateDarkColorHex() {
//   let color = "#";
//   for (let i = 0; i < 3; i++)
//     color += ("0" + Math.floor(Math.random() * Math.pow(16, 2) / 2).toString(16)).slice(-2);
//   return color;
// }

function generateColorHex() {
    let color = "#";
    for (let i = 0; i < 3; i++)
      color += ("0" + Math.floor(((0.5 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
        return color;
  }

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(item => (
          <li
            className={css.item}
            key={item.id}
            style={{ backgroundColor: generateColorHex() }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
