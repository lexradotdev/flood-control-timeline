import { getReports } from "@/data/reports";

export default async function Home() {
  const reports = await getReports();

  return (
    <div className="min-h-screen bg-linear-to-br rounded-2xl from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-slate-800">
          Timeline Comparison
        </h1>
        <p className="text-center text-slate-600 mb-12">
          Side-by-side evolution
        </p>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500 via-purple-500 to-pink-500 -translate-x-1/2"></div>
          <div className="space-y-12">
            <div className="relative flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <div className="inline-block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-sm font-semibold text-blue-600 mb-2">
                    2021
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    Version 2.0
                  </h3>
                  <p className="text-slate-600">
                    Major feature updates released
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-purple-500 rounded-full z-10"></div>

              <div className="w-1/2 pl-8 text-left">{/* Empty space */}</div>
            </div>

            {/* Item 3 */}
            <div className="relative flex items-center">
              <div className="w-1/2 pr-8 text-right">{/* Empty space */}</div>

              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-purple-500 rounded-full z-10"></div>

              <div className="w-1/2 pl-8 text-left">
                <div className="inline-block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-sm font-semibold text-pink-600 mb-2">
                    2022
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    Rebranding
                  </h3>
                  <p className="text-slate-600">Complete brand overhaul</p>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="relative flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <div className="inline-block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-sm font-semibold text-blue-600 mb-2">
                    2023
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    Global Expansion
                  </h3>
                  <p className="text-slate-600">Expanded to 50+ countries</p>
                </div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-purple-500 rounded-full z-10"></div>

              <div className="w-1/2 pl-8 text-left">{/* Empty space */}</div>
            </div>

            {/* Item 5 */}
            <div className="relative flex items-center">
              <div className="w-1/2 pr-8 text-right">{/* Empty space */}</div>

              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-purple-500 rounded-full z-10"></div>

              <div className="w-1/2 pl-8 text-left">
                <div className="inline-block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-sm font-semibold text-pink-600 mb-2">
                    2024
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    New Strategy
                  </h3>
                  <p className="text-slate-600">Shifted focus to enterprise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
