interface TagProps {
  label: string
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="inline-block rounded-full border border-gray-300 bg-gray-50 px-3 py-0.5 text-xs text-gray-700">
      {label}
    </span>
  )
}
