
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wallet, TrendingUp, Shield, Smartphone } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center animate-fade-in">
            <div className="mx-auto w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-8">
              <Wallet className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Controle Financeiro
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                Pessoal
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Gerencie suas finanças de forma inteligente e organize sua vida financeira 
              com nossa plataforma simples e segura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3">
                  Criar Conta Grátis
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                  Fazer Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tudo que você precisa para organizar suas finanças
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma solução completa para gerenciar suas receitas, despesas e ter total controle do seu dinheiro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Gestão de Transações</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Adicione, edite e organize todas as suas receitas e despesas em um só lugar.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <CardTitle className="text-lg">Controle do Saldo</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Acompanhe seu saldo em tempo real e veja o resumo das suas finanças.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-orange-500" />
              </div>
              <CardTitle className="text-lg">Seguro e Privado</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Seus dados financeiros ficam seguros e protegidos com criptografia.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-purple-500" />
              </div>
              <CardTitle className="text-lg">Design Responsivo</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Acesse suas finanças de qualquer dispositivo, a qualquer hora e lugar.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pronto para começar?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de pessoas que já estão organizando suas finanças conosco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold px-8 py-3">
                  Começar Agora
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="px-8 py-3">
                  Já tenho conta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Wallet className="h-6 w-6" />
              <span className="text-lg font-semibold">Controle Financeiro</span>
            </div>
            <p className="text-gray-400">
              © 2024 Controle Financeiro Pessoal. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
