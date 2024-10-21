// Pages/Operator/Index.jsx
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';


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