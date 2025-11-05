import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

const Index = () => {
  const kpiData = [
    { title: "Зарплата", value: "48 250 ₽", change: 3.2, trend: "up" },
    { title: "Численность трудоспособного населения", value: "124 567", change: -0.8, trend: "down" },
    { title: "Объекты МСП", value: "3 428", change: 5.1, trend: "up" },
    { title: "Число самозанятых", value: "8 942", change: 12.4, trend: "up" },
    { title: "Реализовано мер поддержки", value: "67", change: 8.9, trend: "up" }
  ];

  const consumptionData = [
    { month: 'Янв', retail: 450, services: 320, forecast: 480 },
    { month: 'Фев', retail: 480, services: 340, forecast: 510 },
    { month: 'Мар', retail: 520, services: 380, forecast: 550 },
    { month: 'Апр', retail: 490, services: 360, forecast: 520 },
    { month: 'Май', retail: 560, services: 410, forecast: 590 }
  ];

  const investmentData = [
    { month: 'Янв', investment: 1200, support: 450 },
    { month: 'Фев', investment: 1350, support: 520 },
    { month: 'Мар', investment: 1280, support: 480 },
    { month: 'Апр', investment: 1450, support: 610 },
    { month: 'Май', investment: 1580, support: 680 }
  ];

  const pieData1 = [
    { name: 'Торговля', value: 42 },
    { name: 'Услуги', value: 28 },
    { name: 'Производство', value: 18 },
    { name: 'Прочее', value: 12 }
  ];

  const pieData2 = [
    { name: 'Реализовано', value: 67 },
    { name: 'В процессе', value: 23 },
    { name: 'Планируется', value: 10 }
  ];

  const COLORS = ['#0EA5E9', '#10B981', '#FCD34D', '#F59E0B'];

  const documents = [
    { title: "Распоряжение №245", description: "О выделении субсидий малому и среднему бизнесу в размере 12,5 млн рублей", kpi: "Увеличение числа МСП", goal: "Стратегия развития 2024", priority: true },
    { title: "Постановление №18", description: "Об утверждении минимального размера оплаты труда в муниципальных учреждениях", kpi: "Рост средней зарплаты", goal: "Социальная политика", priority: false },
    { title: "Приказ №89", description: "О мерах налоговой поддержки самозанятых граждан на территории муниципалитета", kpi: "Поддержка самозанятых", goal: "Развитие предпринимательства", priority: true },
    { title: "Решение №102", description: "Об инвестиционной программе развития инфраструктуры на 2024-2026 годы", kpi: "Инвестиционные проекты", goal: "Экономический рост", priority: false },
    { title: "Регламент №34", description: "О предоставлении грантов на развитие розничной торговли в сельской местности", kpi: "Развитие розничной торговли", goal: "Потребительский рынок", priority: false },
    { title: "Распоряжение №156", description: "О выделении средств на модернизацию рыночной инфраструктуры в размере 8,3 млн", kpi: "Развитие потребительского рынка", goal: "Инфраструктура", priority: false },
    { title: "Постановление №72", description: "Об установлении льготной ставки по налогу на имущество для промышленных предприятий", kpi: "Промышленное развитие", goal: "Налоговая политика", priority: true },
    { title: "Приказ №201", description: "О создании муниципального фонда поддержки стартапов с капиталом 15 млн рублей", kpi: "Инновационное развитие", goal: "Поддержка стартапов", priority: true }
  ];

  const projects = [
    { title: "Проект решения от 15.10.2024", status: "Утверждён" },
    { title: "Проект решения от 08.10.2024", status: "На согласовании" },
    { title: "Проект решения от 01.10.2024", status: "Утверждён" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-emerald-50 to-cyan-50 p-6">
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex gap-3 overflow-x-auto pb-4">
            {kpiData.map((kpi, index) => (
              <Card key={index} className="glass min-w-[220px] p-4 rounded-2xl border-white/50 shadow-lg">
                <div className="text-xs text-muted-foreground mb-1 font-medium">{kpi.title}</div>
                <div className="text-2xl font-bold text-foreground mb-2">{kpi.value}</div>
                <div className={`flex items-center gap-1 text-sm font-semibold ${kpi.trend === 'up' ? 'text-secondary' : 'text-destructive'}`}>
                  <Icon name={kpi.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} size={16} />
                  <span>{Math.abs(kpi.change)}%</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="glass ml-6 p-4 rounded-2xl border-white/50 shadow-lg min-w-[280px]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
              ЗГ
            </div>
            <div>
              <div className="font-semibold text-foreground">Петров А.В.</div>
              <div className="text-xs text-muted-foreground">Заместитель Главы Администрации</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-2">
          <Card className="glass p-4 rounded-2xl border-white/50 shadow-lg h-[calc(100vh-180px)] overflow-y-auto">
            <h3 className="text-sm font-semibold mb-4 text-foreground flex items-center gap-2">
              <Icon name="FileText" size={16} />
              Документы
            </h3>
            <div className="space-y-3">
              {documents.map((doc, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div className="p-3 rounded-xl bg-white/60 hover:bg-white/80 cursor-pointer transition-all border border-white/50 relative">
                      {doc.priority && (
                        <Icon name="AlertCircle" size={14} className="absolute top-2 right-2 text-accent" />
                      )}
                      <div className="text-xs font-semibold text-foreground pr-4 mb-1">{doc.title}</div>
                      <div className="text-[10px] text-muted-foreground leading-snug mb-2">{doc.description}</div>
                      <div className="flex gap-1.5 flex-wrap">
                        <Badge variant="outline" className="text-[9px] px-1.5 py-0 bg-primary/10 border-primary/30 text-primary">
                          KPI: {doc.kpi}
                        </Badge>
                        <Badge variant="outline" className="text-[9px] px-1.5 py-0 bg-secondary/10 border-secondary/30 text-secondary">
                          {doc.goal}
                        </Badge>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="glass max-w-[250px]">
                    <div className="space-y-1">
                      <div className="text-xs font-semibold">KPI: {doc.kpi}</div>
                      <div className="text-xs text-muted-foreground">Цель: {doc.goal}</div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </Card>
        </div>

        <div className="col-span-7 space-y-6">
          <Card className="glass p-6 rounded-2xl border-white/50 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Store" size={20} className="text-primary" />
              <h2 className="text-lg font-bold text-foreground">Управление развития потребительского рынка и услуг</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Динамика и прогноз</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={consumptionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0f2fe" />
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Line type="monotone" dataKey="retail" stroke="#0EA5E9" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="services" stroke="#10B981" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="forecast" stroke="#FCD34D" strokeWidth={2} strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Структура рынка</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie data={pieData1} cx="50%" cy="50%" outerRadius={70} dataKey="value" label>
                      {pieData1.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>

          <Card className="glass p-6 rounded-2xl border-white/50 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="TrendingUp" size={20} className="text-secondary" />
              <h2 className="text-lg font-bold text-foreground">Управление по инвестициям и поддержке предпринимательства</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Инвестиции и поддержка (млн ₽)</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={investmentData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0f2fe" />
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Bar dataKey="investment" fill="#0EA5E9" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="support" fill="#10B981" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Меры поддержки</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie data={pieData2} cx="50%" cy="50%" outerRadius={70} dataKey="value" label>
                      {pieData2.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>

          <Card className="glass p-6 rounded-2xl border-white/50 shadow-lg border-2 border-accent/30">
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold rounded-xl h-12 text-base shadow-lg">
              <Icon name="FileEdit" size={20} className="mr-2" />
              Составить проект решения
            </Button>
          </Card>
        </div>

        <div className="col-span-3 space-y-6">
          <Card className="glass p-5 rounded-2xl border-white/50 shadow-lg">
            <h3 className="text-sm font-semibold mb-4 text-foreground flex items-center gap-2">
              <Icon name="Archive" size={16} />
              Проекты решений
            </h3>
            <div className="space-y-2">
              {projects.map((project, index) => (
                <div key={index} className="p-3 rounded-xl bg-white/60 hover:bg-white/80 cursor-pointer transition-all border border-white/50">
                  <div className="text-xs font-medium text-foreground mb-1">{project.title}</div>
                  <Badge variant={project.status === "Утверждён" ? "default" : "secondary"} className="text-[10px] px-2 py-0.5">
                    {project.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass p-5 rounded-2xl border-white/50 shadow-lg">
            <h3 className="text-sm font-semibold mb-4 text-foreground flex items-center gap-2">
              <Icon name="BarChart3" size={16} />
              Генератор дашбордов
            </h3>
            <Button className="w-full bg-white/80 hover:bg-white text-foreground font-medium rounded-xl border border-accent/50 shadow-sm">
              <Icon name="Plus" size={16} className="mr-2" />
              Создать дашборд
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;