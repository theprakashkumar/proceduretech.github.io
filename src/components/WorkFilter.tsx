'use client'

import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface FilterOption {
  label: string
  value: string
}

interface FilterGroup {
  name: string
  options: FilterOption[]
}

interface WorkFilterProps {
  filters: FilterGroup[]
  activeFilters: string[]
  onFilterChange: (filters: string[]) => void
}

export default function WorkFilter({
  filters,
  activeFilters,
  onFilterChange,
}: WorkFilterProps) {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null)

  const toggleFilter = (value: string) => {
    if (activeFilters.includes(value)) {
      onFilterChange(activeFilters.filter(f => f !== value))
    } else {
      onFilterChange([...activeFilters, value])
    }
  }

  return (
    <div className="flex flex-col space-y-6">
      {filters.map(group => (
        <div key={group.name} className="relative">
          <button
            onClick={() =>
              setExpandedGroup(expandedGroup === group.name ? null : group.name)
            }
            className="w-full flex items-center justify-between text-left px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg hover:bg-gray-50"
          >
            <span>{group.name}</span>
            <svg
              className={`w-5 h-5 transition-transform ${
                expandedGroup === group.name ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {expandedGroup === group.name && (
            <div className="mt-2 p-4 bg-white rounded-lg shadow-lg">
              <div className="space-y-2">
                {group.options.map(option => (
                  <label
                    key={option.value}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={activeFilters.includes(option.value)}
                      onChange={() => toggleFilter(option.value)}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-600">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
