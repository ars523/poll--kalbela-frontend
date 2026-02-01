import React from "react";

const LineChartSkeleton = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl">
          {/* Header Skeleton */}
          <div className="lg:px-6 px-4 py-4 text-xl font-bold text-gray-800">
            <div className="h-6 w-64 bg-gray-200 rounded animate-gray-pulse"></div>
          </div>
          
          {/* Chart Area Skeleton */}
          <div className="lg:px-6 px-4 lg:pb-6 pb-4">
            <div className="w-full h-[350px] relative bg-white rounded border border-gray-200">
              {/* Y-axis labels skeleton */}
              <div className="absolute left-2 top-4 bottom-14 w-10 flex flex-col justify-between">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-3 w-8 bg-gray-200 rounded animate-gray-pulse"
                  ></div>
                ))}
              </div>

              {/* Chart content area with padding */}
              <div className="ml-14 mr-4 h-[calc(100%-3.5rem)] mt-4 relative">
                {/* Horizontal grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-full h-px bg-gray-200"
                    ></div>
                  ))}
                </div>

                {/* Line paths skeleton - Multiple lines representing different data series */}
                <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Line 1 - Higher line */}
                  <path
                    d="M 0 80 Q 15 60, 25 50 Q 40 35, 50 30 Q 60 25, 75 20 Q 85 15, 100 10"
                    stroke="#cbd5e1"
                    strokeWidth="0.8"
                    fill="none"
                    className="animate-gray-pulse"
                  />
                  {/* Data points for line 1 */}
                  {[0, 20, 40, 60, 80, 100].map((x, i) => (
                    <circle
                      key={`line1-${i}`}
                      cx={x}
                      cy={80 - i * 12}
                      r="1.5"
                      fill="#94a3b8"
                      className="animate-gray-pulse"
                    />
                  ))}

                  {/* Line 2 - Middle line */}
                  <path
                    d="M 0 70 Q 15 65, 25 60 Q 40 55, 50 50 Q 60 45, 75 40 Q 85 35, 100 30"
                    stroke="#cbd5e1"
                    strokeWidth="0.8"
                    fill="none"
                    className="animate-gray-pulse"
                    style={{ animationDelay: "0.2s" }}
                  />
                  {[0, 20, 40, 60, 80, 100].map((x, i) => (
                    <circle
                      key={`line2-${i}`}
                      cx={x}
                      cy={70 - i * 8}
                      r="1.5"
                      fill="#94a3b8"
                      className="animate-gray-pulse"
                      style={{ animationDelay: "0.2s" }}
                    />
                  ))}

                  {/* Line 3 - Lower line */}
                  <path
                    d="M 0 90 Q 15 85, 25 80 Q 40 75, 50 70 Q 60 65, 75 60 Q 85 55, 100 50"
                    stroke="#cbd5e1"
                    strokeWidth="0.8"
                    fill="none"
                    className="animate-gray-pulse"
                    style={{ animationDelay: "0.4s" }}
                  />
                  {[0, 20, 40, 60, 80, 100].map((x, i) => (
                    <circle
                      key={`line3-${i}`}
                      cx={x}
                      cy={90 - i * 8}
                      r="1.5"
                      fill="#94a3b8"
                      className="animate-gray-pulse"
                      style={{ animationDelay: "0.4s" }}
                    />
                  ))}

                  {/* Line 4 - Another line */}
                  <path
                    d="M 0 75 Q 15 70, 25 65 Q 40 60, 50 55 Q 60 50, 75 45 Q 85 40, 100 35"
                    stroke="#cbd5e1"
                    strokeWidth="0.8"
                    fill="none"
                    className="animate-gray-pulse"
                    style={{ animationDelay: "0.6s" }}
                  />
                  {[0, 20, 40, 60, 80, 100].map((x, i) => (
                    <circle
                      key={`line4-${i}`}
                      cx={x}
                      cy={75 - i * 8}
                      r="1.5"
                      fill="#94a3b8"
                      className="animate-gray-pulse"
                      style={{ animationDelay: "0.6s" }}
                    />
                  ))}
                </svg>
              </div>

              {/* X-axis labels skeleton (years) */}
              <div className="absolute bottom-2 left-14 right-4 h-10 flex justify-between items-center">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="h-3 w-10 bg-gray-200 rounded animate-gray-pulse"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LineChartSkeleton;
