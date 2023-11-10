export const StatisticItem = ({ itemName, itemValue }) => (
  <li>
    <p>
      {itemName}: {itemValue ?? 0}
    </p>
  </li>
);
