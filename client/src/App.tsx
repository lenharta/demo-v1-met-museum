import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="MetMuseumApp dark">
      <Outlet />
    </div>
  );
}

export default App;

// function EditPerson<
//   T extends {
//     first: string;
//     last: string;
//   }
// >({ data }: { data: T }) {
//   const [person, updateFields] = useReducer(
//     (current: T, update: Partial<T>) => ({
//       ...current,
//       ...update,
//     }),
//     data
//   );
//   return (
//     <div>
//       <input
//         type="text"
//         value={person.first}
//         onChange={(event) => {
//           const target = event.target as typeof event.target;
//           updateFields({ ...person, first: target.value });
//         }}
//       />
//     </div>
//   );
// }
