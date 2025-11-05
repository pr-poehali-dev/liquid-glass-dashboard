import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

const Index = () => {
  const [selectedChart, setSelectedChart] = useState<string>("");

  const chartTypes = [
    { value: "line", label: "Линейный график", icon: "LineChart" },
    { value: "histogram", label: "Гистограмма", icon: "BarChart2" },
    { value: "pie", label: "Круговая диаграмма", icon: "PieChart" },
    { value: "bar", label: "Столбчатая диаграмма", icon: "BarChart3" },
    { value: "scatter", label: "Точечная диаграмма", icon: "Sparkles" },
    { value: "area", label: "График с областями", icon: "AreaChart" },
    { value: "radar", label: "Радарная диаграмма", icon: "Radar" },
    { value: "sankey", label: "Санки диаграмма", icon: "GitBranch" },
    { value: "treemap", label: "Дерево", icon: "TreeDeciduous" }
  ];

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
    { title: "Проект решения от 15.10.2024", description: "На основе сопоставления обращений и статей расходов в сфере ЖКХ" },
    { title: "Проект решения от 08.10.2024", description: "По результатам анализа эффективности мер поддержки МСП" },
    { title: "Проект решения от 01.10.2024", description: "На базе прогноза инвестиционной активности в муниципалитете" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-emerald-50 to-cyan-50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img 
            src="https://cdn.poehali.dev/files/fd835022-e18e-4dc3-b60a-cfbf2dff8418.png" 
            alt="Герб Одинцовского ГО" 
            className="w-16 h-16 object-contain"
          />
          <h1 className="text-2xl font-bold text-foreground">
            ИИ ПАНЕЛЬ УПРАВЛЕНИЯ ИНВЕСТИЦИЯМИ <br />
            <span className="text-lg">ОДИНЦОВСКОГО ГОРОДСКОГО ОКРУГА</span>
          </h1>
        </div>
        
        <Card className="glass p-4 rounded-2xl border-white/50 shadow-lg min-w-[280px]">
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

      <div className="mb-6 flex gap-4">
        <div className="flex-1 flex gap-3 overflow-x-auto pb-4">
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
        
        <Card className="glass min-w-[240px] p-4 rounded-2xl border-white/50 shadow-lg border-2 border-accent/50 hover:border-accent transition-all cursor-pointer">
          <div className="flex flex-col items-center justify-center h-full gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Plus" size={24} className="text-white" />
            </div>
            <div className="text-xs font-semibold text-center text-foreground">
              Подключить источник<br />поступления данных
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-2">
          <Card className="glass p-4 rounded-2xl border-white/50 shadow-lg sticky top-6">
            <h3 className="text-sm font-semibold mb-4 text-foreground flex items-center gap-2">
              <Icon name="FileText" size={16} />
              Документы
            </h3>
            <div className="space-y-3 max-h-[calc(100vh-220px)] overflow-y-auto pr-2">
              {documents.map((doc, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div className="p-3 rounded-xl bg-white/60 hover:bg-white/80 cursor-pointer transition-all border border-white/50 relative">
                      {doc.priority && (
                        <Icon name="AlertCircle" size={14} className="absolute top-2 right-2 text-accent" />
                      )}
                      <div className="text-xs font-semibold text-foreground pr-4">{doc.title}</div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="max-w-xs">
                    <div className="space-y-1">
                      <div className="text-xs font-medium">{doc.description}</div>
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
                <div className="flex gap-4 mt-2 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span>Розничная торговля</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span>Услуги</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <span>Прогноз</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Структура рынка</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie 
                      data={pieData1} 
                      cx="50%" 
                      cy="50%" 
                      outerRadius={70} 
                      dataKey="value" 
                      label={({ name, value }) => `${name}: ${value}%`}
                      labelLine={{ stroke: '#94a3b8', strokeWidth: 1 }}
                    >
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
                <div className="flex gap-4 mt-2 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span>Инвестиции</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span>Поддержка</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Меры поддержки</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie 
                      data={pieData2} 
                      cx="50%" 
                      cy="50%" 
                      outerRadius={70} 
                      dataKey="value" 
                      label={({ name, value }) => `${name}: ${value}%`}
                      labelLine={{ stroke: '#94a3b8', strokeWidth: 1 }}
                    >
                      {pieData2.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>

          <Card className="glass p-6 rounded-2xl border-white/50 shadow-lg border-2 border-accent/50">
            <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white rounded-xl py-6 text-lg font-semibold hover:shadow-xl transition-all">
              <Icon name="FileEdit" size={24} className="mr-2" />
              Составить проект решения
            </Button>
          </Card>
        </div>

        <div className="col-span-3 space-y-6">
          <Card className="glass p-5 rounded-2xl border-white/50 shadow-lg">
            <h3 className="text-sm font-semibold mb-4 text-foreground flex items-center gap-2">
              <Icon name="Archive" size={18} />
              Проекты решений
            </h3>
            <div className="space-y-3">
              {projects.map((project, index) => (
                <div key={index} className="p-3 rounded-xl bg-white/60 hover:bg-white/80 cursor-pointer transition-all border border-white/50">
                  <div className="text-xs font-semibold text-foreground mb-1">{project.title}</div>
                  <div className="text-[10px] text-muted-foreground leading-snug">{project.description}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass p-5 rounded-2xl border-white/50 shadow-lg border-2 border-accent/30">
            <h3 className="text-sm font-semibold mb-4 text-foreground flex items-center gap-2">
              <Icon name="BarChart3" size={18} />
              Генератор дашбордов
            </h3>
            <div className="space-y-3">
              <Select value={selectedChart} onValueChange={setSelectedChart}>
                <SelectTrigger className="rounded-xl border-white/50">
                  <SelectValue placeholder="Выберите тип диаграммы" />
                </SelectTrigger>
                <SelectContent>
                  {chartTypes.map((chart) => (
                    <SelectItem key={chart.value} value={chart.value}>
                      <div className="flex items-center gap-2">
                        <Icon name={chart.icon} size={16} />
                        <span className="text-xs">{chart.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {selectedChart && (
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-accent/30">
                  <div className="text-xs font-semibold text-foreground mb-2">
                    Выбрана диаграмма:
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {chartTypes.find(c => c.value === selectedChart)?.label}
                  </div>
                </div>
              )}
              
              <Button className="w-full bg-accent text-white rounded-xl hover:bg-accent/90 transition-all">
                <Icon name="Plus" size={16} className="mr-2" />
                Создать дашборд
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;