export default function Loading() {
  return (
    <button type="button" className="bg-darkBlue text-white" disabled>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      Loading...
    </button>
  );
}
