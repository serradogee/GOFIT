import { useState } from 'react';
import type { UserProfile } from '../types/domain';

interface ProfileFormProps {
  profile: UserProfile;
  onSubmit: (nextProfile: UserProfile) => void;
}

const ProfileForm = ({ profile, onSubmit }: ProfileFormProps) => {
  const [draft, setDraft] = useState<UserProfile>(profile);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
        className="w-full py-3 text-sm font-black uppercase tracking-[0.2em] bg-red-500 text-black rounded-xl hover:bg-red-400 transition-colors"
      >
        Guardar perfil
      </button>
    </form>
  );
};

export default ProfileForm;
