// GenderCheckbox.jsx
const GenderCheckbox = ({ onGenderChange, gender }) => {
  return (
     <div className="flex">
       <div className="form-control">
         <label className={`label gap-2 cursor-pointer ${gender === "male" ? "selected" : "" } `}>
           <span className="label-text">Male</span>
           <input
             type="checkbox"
             className="checkbox border-slate-900"
             checked={gender === "male"}
             onChange={() => onGenderChange("male")}
           />
         </label>
       </div>
       <div className="form-control">
         <label className={`label gap-2 cursor-pointer ${gender === "female" ? "selected" : "" } `}>
           <span className="label-text">Female</span>
           <input
             type="checkbox"
             className="checkbox border-slate-900"
             checked={gender === "female"}
             onChange={() => onGenderChange("female")}
           />
         </label>
       </div>
     </div>
  );
 };
 
 export default GenderCheckbox;