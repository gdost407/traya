export default function Navigation({ canPrev, canNext, onPrev, onNext, nextText }) {
  return (
    <div className="position-absolute bottom-0 end-0 start-0 p-2 text-end">
      <div className="d-none d-md-block">
        <div className="d-flex justify-content-between mt-4 px-3">
          <button className="btn btn-secondary w-25" onClick={onPrev} disabled={!canPrev}>
            Previous
          </button>
          <button className="btn btn-purple w-25" onClick={onNext} disabled={!canNext}>
            {nextText}
          </button>
        </div>
      </div>
      <div className="d-md-none">
        <button className="btn btn-purple w-100" onClick={onNext} disabled={!canNext}>
          {nextText}
        </button>
      </div>
      
    </div>
  );
}
