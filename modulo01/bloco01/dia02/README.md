# Unix & Bash - Parte 2
### Principais pontos abordados:
* Comando find ;
* Operadores > (maior), >> (maior maior) e | (pipe) no terminal;
* Alterar as permissões de arquivos e diretórios;
* Verificar o status e enviar sinais a processos UNIX;

### Exercícios do dia:
#### Parte I - Comandos de Input e Output

01. Navegue até a pasta unix_tests ;
02. Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet , Unix e Bash , um em cada linha.
03. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓
04. Conte quantas linhas tem o arquivo skills2.txt .
05. Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética.
06. Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.
07. Conte o número de linhas que contêm as letras br .
08. Conte o número de linhas que não contêm as letras br .
09. Adicione dois nomes de países ao final do arquivo phrases2.txt .
10. Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt
11. Ordene o arquivo bunch_of_things.txt .



#### Parte II - Permissões

01. Navegue até a pasta unix_tests ;
02. Rode o comando ls -l e veja quais as permissões dos arquivos;
03. Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l ;
Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
04. Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l ;
Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
05. Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt .
Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt .



#### Parte III - Processos & Jobs

01. Liste todos os processos;
02. Agora use o comando sleep 30 & ;
03. Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo) ;
04. Execute novamente o comando sleep 30 , mas agora sem o & . Depois, faça com que ele continue executando em background;
05. Crie um processo em background que rode o comando sleep por 300 segundos.
06. Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.
Você deve criá-los em foreground (sem usar o & ) e suspendê-los (apertando ctrl+z ) após cada um começar a executar.
07. Verifique que apenas o processo sleep 300 está em execução com o comando jobs . Suspenda a execução desse processo.
Você vai precisar trazer o processo para foreground ( fg ) e suspendê-lo ( ctrl+z ), ou enviar um sinal.
08. Retome a execução do processo sleep 100 em background com o comando bg .
09. Termine a execução de todos os processos sleep (mate os processos) .



#### Parte IV - O despertar do terminal

01. Se você utiliza o Linux , abra o terminal e execute o comando sudo apt-get install cmatrix , ou para pessoas usuárias de macOS , utilize no terminal brew install cmatrix . Depois, execute o comando cmatrix . Quando estiver se sentindo como o Neo , aperte ctrl+c para voltar ao terminal;
02. No sistema Linux , execute o comando sudo apt-get install fortune , ou no macOS brew install fortune , e após a instalação, crie um arquivo de texto chamado fortune.txt que contenha a sua sorte do dia. Utilize apenas uma linha de comando. Dica: use o comando fortune , e o operador > ;
03. Conte quantas palavras tem a frase da sua sorte do dia. Dica: use o comando wc ;
04. Execute o comando sudo apt-get install sl em um terminal Linux , ou brew install sl em um terminal macOS . Após a instalação, execute o comando sl . Agora tente sl -F ;
05. No sistema Linux , execute o comando sudo apt-get install cowsay , ou brew install cowsay no macOS . Após a instalação, execute o comando cowsay e algo que você queira falar. Agora faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt ;
06. Descubra os fatores primos usando o comando factor e em seguida o número 42 ;
07. Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando rev .
08. Execute o comando telnet towel.blinkenlights.nl e espere alguns segundos. Lembre-se que você tem mais exercícios para fazer! 😅
