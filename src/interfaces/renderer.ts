import { Game } from "../core/game";

export interface Renderer {
  render: (game: Game) => void;
}