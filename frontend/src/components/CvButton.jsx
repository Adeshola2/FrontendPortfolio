import { API } from '../lib/api';

// Hits the backend, which counts the download and sends the PDF.
export default function CvButton({ className = 'btn-spark' }) {
  return (
   <a href={`${API}/api/cv`} className={className}>
      CV
    </a>
  );
}
