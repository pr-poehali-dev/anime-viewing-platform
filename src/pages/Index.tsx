import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [notifications, setNotifications] = useState(3);

  const animeData = [
    {
      id: 1,
      title: "Школьная драма",
      genre: "Романтика",
      rating: 4.8,
      episodes: "12/12",
      image: "img/9687a671-4c46-48fc-97d1-45537bbb0778.jpg",
      isNew: true,
    },
    {
      id: 2,
      title: "Корейская дорама",
      genre: "Драма",
      rating: 4.9,
      episodes: "16/16",
      image: "img/39ac6ebd-5b5c-4690-9d64-1271bbd46040.jpg",
      isNew: false,
    },
    {
      id: 3,
      title: "Магическое приключение",
      genre: "Фэнтези",
      rating: 4.7,
      episodes: "24/24",
      image: "img/543de364-12b5-4e83-96b5-50f74ee62d8f.jpg",
      isNew: true,
    },
  ];

  const genres = ["Все", "Романтика", "Драма", "Фэнтези", "Комедия", "Боевик"];

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold">ANIME & DRAMA</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="story-link hover:text-primary">
                  Главная
                </a>
                <a href="#" className="story-link hover:text-primary">
                  Каталог
                </a>
                <a href="#" className="story-link hover:text-primary">
                  Жанры
                </a>
                <a href="#" className="story-link hover:text-primary">
                  Новинки
                </a>
                <a href="#" className="story-link hover:text-primary">
                  Топ
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  placeholder="Поиск аниме и дорам..."
                  className="w-64 bg-muted"
                />
                <Icon
                  name="Search"
                  className="absolute right-3 top-3 h-4 w-4 text-muted-foreground"
                />
              </div>

              <div className="relative">
                <Button variant="ghost" size="icon">
                  <Icon name="Bell" className="h-5 w-5" />
                  {notifications > 0 && (
                    <Badge className="absolute -top-2 -right-2 notification-badge">
                      {notifications}
                    </Badge>
                  )}
                </Button>
              </div>

              <Button variant="ghost" size="icon">
                <Icon name="User" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold mb-4">
              Смотри лучшие
              <span className="text-primary"> аниме и дорамы</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Получай уведомления о новых сериях и никогда не пропускай любимые
              шоу
            </p>
            <div className="flex space-x-4">
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Play" className="mr-2 h-4 w-4" />
                Смотреть сейчас
              </Button>
              <Button variant="outline">
                <Icon name="Heart" className="mr-2 h-4 w-4" />В избранное
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Genres Filter */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex space-x-4 overflow-x-auto">
          {genres.map((genre, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="whitespace-nowrap"
            >
              {genre}
            </Button>
          ))}
        </div>
      </section>

      {/* Content Grid */}
      <section className="container mx-auto px-4 pb-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold">Популярное сейчас</h3>
          <Button variant="ghost">
            Показать все
            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {animeData.map((anime) => (
            <Card key={anime.id} className="anime-card group">
              <div className="relative">
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="anime-card-image"
                />
                {anime.isNew && (
                  <Badge className="absolute top-2 left-2 notification-badge">
                    Новинка
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="icon"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Icon name="Play" className="h-6 w-6" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <h4 className="font-semibold text-lg mb-2">{anime.title}</h4>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{anime.genre}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {anime.episodes}
                  </span>
                </div>
                <div className="rating-stars">
                  <Icon
                    name="Star"
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                  <span className="text-sm font-medium">{anime.rating}</span>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0 space-x-2">
                <Button className="flex-1 bg-primary hover:bg-primary/90">
                  <Icon name="Play" className="mr-2 h-4 w-4" />
                  Смотреть
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Heart" className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Plus" className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Notification Panel */}
      <div className="fixed bottom-4 right-4 bg-card border border-border rounded-lg p-4 shadow-lg">
        <div className="flex items-center space-x-3">
          <Icon name="Bell" className="h-5 w-5 text-primary" />
          <div>
            <p className="font-semibold">Новая серия!</p>
            <p className="text-sm text-muted-foreground">
              Магическое приключение - эпизод 25
            </p>
          </div>
          <Button size="sm" variant="ghost">
            <Icon name="X" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
