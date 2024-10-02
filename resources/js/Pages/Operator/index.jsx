// Pages/Operator/Index.jsx
import { Head, Link } from '@inertiajs/inertia-react';

function OperatorIndex({ operators }) {
  return (
    <div>
      <Head title="Operators" />
      <h1>Operators</h1>
      <ul>
        {operators.map((operator) => (
          <li key={operator.id}>{operator.operator_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default OperatorIndex;