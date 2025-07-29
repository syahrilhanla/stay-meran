"use client";

import { useState } from "react";

export default function Home() {
	const [name, setName] = useState("");
	const [nameList, setNameList] = useState<string[]>([]);
	const [error, setError] = useState<string | null>(null);

	const handleAddName = (name: string) => {
		if (name === "") return setError("Name cannot be empty"); // Prevent adding empty names
		if (nameList.includes(name)) return setError("Name already exists"); // Prevent adding duplicate names

		// Add name to the list
		setNameList([...nameList, name]);

		// Clear the input field after adding
		setName("");
	};

	const handleRemoveName = (index: number) => {
		// Remove name from the list by index
		const newNames = nameList.filter((name, i) => i !== index);
		setNameList(newNames);
	};

	return (
		<main className="flex flex-col items-center justify-center min-h-screen bg-slate-800/70 text-slate-50">
			<div className="h-screen flex flex-col items-center justify-start py-8 gap-8">
				<div className="flex gap-3">
					<input
						type="text"
						className="bg-slate-700/50 border border-slate-600 rounded-md p-2"
						placeholder="Type your name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>

					<button
						className="bg-slate-600/50 border border-slate-500 rounded-md p-2 hover:bg-slate-500/50 transition-colors duration-200 cursor-pointer"
						onClick={() => handleAddName(name)}
					>
						Add
					</button>
				</div>
				{error ? <div className="text-red-500">{error}</div> : null}

				<table>
					<thead className="bg-slate-700/50 text-slate-50 border-b border-slate-600">
						<tr className="text-left">
							<th className="p-4 text-sm w-4 rounded-tl-lg">No</th>
							<th className="p-4 text-sm w-90">Name</th>
							<th className="p-4 text-sm w-12 rounded-tr-lg">Action</th>
						</tr>
					</thead>
					<tbody>
						{nameList.length === 0 ? (
							<tr>
								<td
									colSpan={3}
									className="p-4 text-sm text-center text-slate-400 bg-slate-700/50 rounded-b-lg"
								>
									No names added yet.
								</td>
							</tr>
						) : null}

						{nameList.map((name, index) => (
							<tr key={index}>
								<td className="p-4 text-sm bg-slate-700/50 w-4">{index + 1}</td>
								<td className="p-4 text-sm bg-slate-700/50 w-90">{name}</td>
								<td className="p-4 text-sm bg-slate-700/50 w-12">
									<button
										className="bg-red-400/50 border border-red-300 rounded-md p-2 hover:bg-red-500/50 transition-colors duration-200"
										onClick={() => handleRemoveName(index)}
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</main>
	);
}
