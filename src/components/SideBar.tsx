import {Button} from "./Button";
import {GenreResponseProps} from "../App";

type SideBarProps = {
    genres: GenreResponseProps[];
    handleClickButton: (genreId: number) => void;
    selectedGenreId: number;
}

export function SideBar({ genres, handleClickButton, selectedGenreId}: SideBarProps) {
  return (
      <nav className="sidebar">
          <span>Watch<p>Me</p></span>

          <div className="buttons-container">
              {genres.map(genre => (
                  <Button
                      key={String(genre.id)}
                      title={genre.title}
                      iconName={genre.name}
                      onClick={() => handleClickButton(genre.id)}
                      selected={selectedGenreId === genre.id}
                  />
              ))}
          </div>

      </nav>
  );
}