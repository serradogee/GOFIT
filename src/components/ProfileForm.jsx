import { useState } from 'react';

const ProfileForm = ({ profile, onSubmit }) => {
  const [draft, setDraft] = useState(profile);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(draft);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-black uppercase tracking-widest text-zinc-400 mb-2">Nombre</label>
        <input
          value={draft.name}
          onChange={(event) => setDraft((prev) => ({ ...prev, name: event.target.value }))}
          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-sm"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-zinc-400 mb-2">Edad</label>
          <input
            type="number"
            value={draft.age}
            onChange={(event) => setDraft((prev) => ({ ...prev, age: Number(event.target.value) }))}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-zinc-400 mb-2">Peso (kg)</label>
          <input
            type="number"
            value={draft.weightKg}
            onChange={(event) => setDraft((prev) => ({ ...prev, weightKg: Number(event.target.value) }))}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-sm"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-4 text-sm font-black uppercase tracking-[0.3em] bg-amber-500 text-black rounded-[1.5rem] hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(251,191,36,0.2)]"
      >
        Guardar perfil
      </button>
    </form>
  );
};

export default ProfileForm;
