import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedArt, setSelectedArt] = useState<number | null>(null);

  const artworks = [
    {
      id: 1,
      title: "Русская Геральдика",
      description: "Современная интерпретация традиционной русской символики",
      image: "https://cdn.poehali.dev/projects/cc966409-c822-4622-a209-8c914a853458/files/aceb976e-5250-4f30-8f4b-77ed4d6fb055.jpg",
      tags: ["Орёл", "Щит", "Меч", "Герб"],
      resolution: "4096x4096",
      formats: ["PNG", "SVG", "PDF", "TIFF"],
      materials: {
        fabric: "Прямая цифровая печать, сублимация, термотрансфер",
        ceramic: "Деколь, цифровая керамическая печать",
        metal: "УФ-печать, гравировка, напыление",
        paper: "Офсет, цифровая печать, шелкография"
      }
    },
    {
      id: 2,
      title: "Дух Воина",
      description: "Двойственность русского воина: мирный человек и защитник отчизны",
      image: "https://cdn.poehali.dev/projects/cc966409-c822-4622-a209-8c914a853458/files/f6ada414-74fa-4c99-94f5-d9914633da5b.jpg",
      tags: ["Воин", "Защитник", "Традиции", "Контраст"],
      resolution: "4096x2304",
      formats: ["PNG", "SVG", "PDF", "TIFF"],
      materials: {
        fabric: "Сублимация на ткани, холсте",
        ceramic: "Панно, декоративная плитка",
        metal: "Металлические постеры, настенные панели",
        paper: "Широкоформатная печать, плакаты, баннеры"
      }
    }
  ];

  const printMaterials = [
    {
      name: "Ткань",
      icon: "Shirt",
      description: "Хлопок, шёлк, полиэстер, лён",
      tech: "DTG, сублимация, термотрансфер",
      dpi: "300 DPI",
      format: "PNG, TIFF",
      colorMode: "CMYK + Pantone"
    },
    {
      name: "Керамика",
      icon: "Coffee",
      description: "Кружки, плитка, посуда",
      tech: "Деколь, цифровая печать",
      dpi: "600 DPI",
      format: "PNG, PDF",
      colorMode: "CMYK"
    },
    {
      name: "Металл",
      icon: "Shield",
      description: "Алюминий, сталь, латунь",
      tech: "УФ-печать, гравировка",
      dpi: "1200 DPI",
      format: "AI, SVG, EPS",
      colorMode: "RGB + спотовые цвета"
    },
    {
      name: "Бумага",
      icon: "FileText",
      description: "Постеры, открытки, календари",
      tech: "Офсет, цифровая печать",
      dpi: "300-600 DPI",
      format: "PDF, TIFF",
      colorMode: "CMYK"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <div className="container mx-auto px-4 py-16 space-y-16">
        <header className="text-center space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Русская Геральдика
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Современный цифровой арт с традиционными русскими символами
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="outline" className="px-4 py-2 text-base border-primary/50">
              <Icon name="Shield" className="mr-2 h-4 w-4" />
              Высокое качество
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-base border-primary/50">
              <Icon name="Printer" className="mr-2 h-4 w-4" />
              Готово к печати
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-base border-primary/50">
              <Icon name="Palette" className="mr-2 h-4 w-4" />
              Авторский дизайн
            </Badge>
          </div>
        </header>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center">Коллекция артов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((art, index) => (
              <Card 
                key={art.id} 
                className="group cursor-pointer overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedArt(art.id)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={art.image} 
                    alt={art.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      <Icon name="Eye" className="mr-2 h-4 w-4" />
                      Просмотреть детали
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-muted-foreground">{art.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {art.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                    <span className="flex items-center">
                      <Icon name="Image" className="mr-2 h-4 w-4" />
                      {art.resolution}
                    </span>
                    <span className="flex items-center">
                      <Icon name="FileType" className="mr-2 h-4 w-4" />
                      {art.formats.length} форматов
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-8 py-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Подготовка к печати</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Универсальная подготовка для всех типов материалов с техническими характеристиками
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {printMaterials.map((material, index) => (
              <Card 
                key={material.name}
                className="group hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={material.icon as any} className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {material.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {material.description}
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Icon name="Settings" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{material.tech}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Maximize" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{material.dpi}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="File" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{material.format}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Palette" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{material.colorMode}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-card border-2 border-primary/20 rounded-3xl p-12 text-center space-y-6 animate-fade-in">
          <Icon name="Info" className="h-12 w-12 text-primary mx-auto" />
          <h3 className="text-3xl font-bold">Технические требования</h3>
          <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Icon name="Image" className="h-5 w-5" />
                Разрешение
              </div>
              <p className="text-muted-foreground">
                Минимум 300 DPI для печати, 4K разрешение для цифровых носителей
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Icon name="Palette" className="h-5 w-5" />
                Цветовые профили
              </div>
              <p className="text-muted-foreground">
                CMYK для офсетной печати, RGB для цифровой, Pantone для спот-цветов
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Icon name="FileType" className="h-5 w-5" />
                Форматы файлов
              </div>
              <p className="text-muted-foreground">
                PNG/TIFF для растра, AI/SVG/EPS для векторной графики, PDF для универсальной печати
              </p>
            </div>
          </div>
        </section>
      </div>

      <Dialog open={selectedArt !== null} onOpenChange={() => setSelectedArt(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedArt && artworks.find(art => art.id === selectedArt) && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">
                  {artworks.find(art => art.id === selectedArt)!.title}
                </DialogTitle>
                <DialogDescription>
                  {artworks.find(art => art.id === selectedArt)!.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <img 
                  src={artworks.find(art => art.id === selectedArt)!.image}
                  alt={artworks.find(art => art.id === selectedArt)!.title}
                  className="w-full rounded-xl border-2 border-border"
                />
                <Tabs defaultValue="info" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="info">Информация</TabsTrigger>
                    <TabsTrigger value="formats">Форматы</TabsTrigger>
                    <TabsTrigger value="materials">Материалы</TabsTrigger>
                  </TabsList>
                  <TabsContent value="info" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Разрешение</p>
                        <p className="text-lg font-semibold">
                          {artworks.find(art => art.id === selectedArt)!.resolution}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Элементы</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {artworks.find(art => art.id === selectedArt)!.tags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="formats" className="space-y-3">
                    <p className="text-muted-foreground mb-4">Доступные форматы для экспорта:</p>
                    {artworks.find(art => art.id === selectedArt)!.formats.map((format) => (
                      <div key={format} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon name="File" className="h-5 w-5 text-primary" />
                          <span className="font-semibold">{format}</span>
                        </div>
                        <Button size="sm" variant="outline">
                          <Icon name="Download" className="h-4 w-4 mr-2" />
                          Скачать
                        </Button>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="materials" className="space-y-4">
                    {Object.entries(artworks.find(art => art.id === selectedArt)!.materials).map(([key, value]) => (
                      <div key={key} className="p-4 bg-muted/50 rounded-lg space-y-2">
                        <p className="font-semibold capitalize">
                          {key === 'fabric' ? 'Ткань' : key === 'ceramic' ? 'Керамика' : key === 'metal' ? 'Металл' : 'Бумага'}
                        </p>
                        <p className="text-sm text-muted-foreground">{value}</p>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
                <Button className="w-full" size="lg">
                  <Icon name="Download" className="mr-2 h-5 w-5" />
                  Скачать все форматы
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;