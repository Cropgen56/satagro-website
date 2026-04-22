import PropTypes from "prop-types";

const colorMap = {
  healthy:  "border-status-green bg-status-green/5 text-status-green",
  moderate: "border-status-orange bg-status-orange/5 text-status-orange",
  stressed: "border-status-red bg-status-red/5 text-status-red",
};

const dotMap = {
  healthy:  "bg-status-green",
  moderate: "bg-status-orange",
  stressed: "bg-status-red",
};

export default function IndexPill({ name, value, status }) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl border-l-4 px-3 py-2.5 ${colorMap[status]}`}
    >
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-widest opacity-70">{name}</p>
        <p className="font-mono text-sm font-bold">{value}</p>
      </div>
      <span className={`h-2 w-2 rounded-full ${dotMap[status]} animate-pulse`} />
    </div>
  );
}

IndexPill.propTypes = {
  name:   PropTypes.string.isRequired,
  value:  PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  status: PropTypes.oneOf(["healthy", "moderate", "stressed"]).isRequired,
};