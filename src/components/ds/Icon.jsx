import React from "react";
import {
  Flower,
  MoonStar,
  Zap,
  Flame,
  Heart,
  Leaf,
  FlaskConical,
  CircleCheck,
  ShieldCheck,
  Calendar,
  Brain,
  BrainCircuit,
  Laptop,
  PersonStanding,
  Pill,
  Link,
  Bell,
  Sun,
  Sunrise,
  Truck,
  ShoppingBag,
  User,
  Search,
  Instagram,
  Youtube,
  Mail,
  Plus,
  Minus,
  Check,
  Lock,
  Headphones,
  Play,
  Clock,
  HeartHandshake,
  Users,
  ArrowRight,
  ArrowDown,
  MessageCircle,
  Gift,
  Star,
  Sparkles,
  ChevronDown,
  Quote,
  X,
  AudioLines,
  Repeat,
  Flower2,
  Eye,
  Smile,
} from "lucide-react";

/**
 * Trueday line icon. Wraps Lucide and applies the brand stroke + optional
 * "proof seal" ring. The brand catalogue maps these Lucide names to the
 * icon names used in the JSX (kebab-case):
 *
 *   balance/lotus -> flower        energy -> zap         moon+stars -> moon-star
 *   vitality     -> flame          libido  -> heart      clean      -> leaf
 *   ingredients  -> flask-conical  cert.   -> circle-check
 *   results      -> shield-check   daily   -> calendar   mind       -> brain
 *   capsule      -> pill           link    -> link        bell       -> bell
 *   sun          -> sun            sunrise -> sunrise    plant      -> flower-2
 *   headphones   -> headphones     play    -> play       clock      -> clock
 *   arrow        -> arrow-right    wave    -> audio-lines
 *   ritual/loop  -> repeat         gift    -> gift       star       -> star
 *   sparkles     -> sparkles       heart-handshake       users      -> users
 *   chevron-down -> chevron-down   x       -> x          quote      -> quote
 *   plus         -> plus           minus   -> minus      check      -> check
 *   lock         -> lock           mail    -> mail       search     -> search
 *   user         -> user           truck   -> truck      bag        -> shopping-bag
 *   instagram    -> instagram      youtube -> youtube    eye        -> eye
 *   smile        -> smile          brain-circuit         laptop     -> laptop
 *   meditate     -> person-standing message-circle
 *   arrow-down   -> arrow-down
 *
 * All icons in this list are imported by name above so Vite can tree-shake
 * the lucide-react bundle to just what we use.
 */
const ICONS = {
  flower: Flower,
  "moon-star": MoonStar,
  zap: Zap,
  flame: Flame,
  heart: Heart,
  leaf: Leaf,
  "flask-conical": FlaskConical,
  "circle-check": CircleCheck,
  "shield-check": ShieldCheck,
  calendar: Calendar,
  brain: Brain,
  "brain-circuit": BrainCircuit,
  laptop: Laptop,
  "person-standing": PersonStanding,
  pill: Pill,
  link: Link,
  bell: Bell,
  sun: Sun,
  sunrise: Sunrise,
  truck: Truck,
  "shopping-bag": ShoppingBag,
  user: User,
  search: Search,
  instagram: Instagram,
  youtube: Youtube,
  mail: Mail,
  plus: Plus,
  minus: Minus,
  check: Check,
  lock: Lock,
  headphones: Headphones,
  play: Play,
  clock: Clock,
  "heart-handshake": HeartHandshake,
  users: Users,
  "arrow-right": ArrowRight,
  "arrow-down": ArrowDown,
  "message-circle": MessageCircle,
  gift: Gift,
  star: Star,
  sparkles: Sparkles,
  "chevron-down": ChevronDown,
  quote: Quote,
  x: X,
  "audio-lines": AudioLines,
  repeat: Repeat,
  "flower-2": Flower2,
  eye: Eye,
  smile: Smile,
};

function resolveGlyph(name) {
  if (!name) return null;
  if (ICONS[name]) return ICONS[name];
  // Last-ditch fallback — should never fire if the catalogue is consistent.
  const pascal = String(name)
    .split(/[-_ ]/)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
  return ICONS[pascal] || null;
}

/** Trueday line icon. Wraps Lucide and applies the brand stroke + optional "proof seal" ring. */
export function Icon({
  name,
  size = 24,
  color = "var(--td-gold-400)",
  strokeWidth = 1.5,
  circled = false,
  ringColor,
  label,
  style,
  ...rest
}) {
  const Glyph = resolveGlyph(name);
  const inner = Glyph ? (
    <Glyph
      size={circled ? Math.round(size * 0.52) : size}
      color={color}
      strokeWidth={strokeWidth}
      aria-hidden={label ? undefined : "true"}
      aria-label={label}
    />
  ) : (
    // Honest fallback: a dashed square so missing icons are visible, not silent.
    <svg
      width={circled ? Math.round(size * 0.52) : size}
      height={circled ? Math.round(size * 0.52) : size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={circled ? undefined : { display: "block", flex: "none", ...style }}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="3 3" />
    </svg>
  );
  if (!circled) return inner;
  return (
    <span
      {...rest}
      style={{
        width: size,
        height: size,
        borderRadius: "var(--radius-pill)",
        border: `1px solid ${ringColor || color}`,
        display: "grid",
        placeItems: "center",
        flex: "none",
        ...style,
      }}
    >
      {inner}
    </span>
  );
}
