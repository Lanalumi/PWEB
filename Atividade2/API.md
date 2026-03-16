* O que é uma API?



Para explicar o que é uma API com mais profundidade, imagine que ela é a camada de abstração que separa a interface que o usuário vê (o front-end) da lógica complexa e dos dados que ficam guardados no servidor (o back-end). Em termos técnicos, uma API funciona como um contrato de serviço documentado: ela define exatamente quais "perguntas" um sistema pode fazer e quais "respostas" ele tem garantia de receber. Sem a API, cada software teria que conhecer intimamente o código interno, a linguagem de programação e a estrutura do banco de dados de todos os outros sistemas com os quais deseja interagir, o que tornaria a integração tecnológica impossível em escala global.



Ao utilizar uma API, o desenvolvedor não precisa se preocupar com a implementação interna do serviço que está consumindo. Por exemplo, ao integrar um sistema de autenticação ou um serviço de busca, você apenas envia uma requisição formatada seguindo as regras daquele "contrato". A API então atua como um ponto de entrada controlado e seguro, validando se quem está pedindo tem permissão (através de tokens ou chaves), processando a lógica necessária e devolvendo apenas os dados pertinentes, geralmente em um formato leve e universal como o JSON. Isso permite que diferentes tecnologias — como um aplicativo em React, um servidor em Node.js ou um banco de dados SQL — trabalhem juntos de forma harmoniosa e independente.



Os 3 Pilares do "O que é uma API":



&nbsp;	- Padronização: Ela estabelece uma linguagem comum (como o protocolo HTTP) para que sistemas escritos em linguagens diferentes (Java, Python, JavaScript) se entendam.



&nbsp;	- Segurança (Gateway): A API decide o que expor. Ela nunca abre o "coração" do servidor para o público; ela apenas entrega a informação que foi explicitamente solicitada e autorizada.



&nbsp;	- Escalabilidade: Como a API separa as responsabilidades, você pode mudar todo o seu banco de dados ou a lógica interna do servidor sem que o usuário final ou o aplicativo mobile percebam, desde que o "contrato" (os endpoints) da API continue o mesmo.



* Principais Tipos de APIs:

&nbsp;	As APIs podem ser classificadas de duas formas principais, pelo acesso e pela arquitetura.

&nbsp;		- Quanto ao Acesso: 

&nbsp;			- Privadas (Internas): Usadas apenas dentro de uma empresa para conectar sistemas próprios.

&nbsp;			- Públicas (Abertas): Disponíveis para qualquer desenvolvedor (ex: API do Google Maps ou Twitter).

&nbsp;			- Partner (Parceiros): Compartilhadas apenas com parceiros de negócios específicos.

&nbsp;		- Quanto à Arquitetura (Protocolos):

&nbsp;			- REST (Representational State Transfer): A mais comum hoje. Utiliza o protocolo HTTP e geralmente troca dados em formato JSON. É leve e escalável.

&nbsp;			- SOAP (Simple Object Access Protocol): Mais rigorosa e segura, muito utilizada por bancos. Utiliza majoritariamente o formato XML.

&nbsp;			- GraphQL: Criada pelo Facebook, permite que o cliente peça exatamente os dados de que precisa, evitando o excesso de informação.

&nbsp;			- gRPC: Focada em alta performance, ideal para comunicação entre microserviços.

* Ferramentas Essenciais:

&nbsp;	Se você está começando a trabalhar ou testar APIs, estas são as ferramentas fundamentais:

&nbsp;		- Postman:Testar requisições (GET, POST, etc.) e visualizar respostas.

&nbsp;		- Swagger:Documentar a API para que outros saibam como usá-la.

&nbsp;		-Zod: Validar se os dados que entram ou saem da API estão corretos.

&nbsp;		-TanStack Query: Gerenciar o estado e o cache de dados de APIs em aplicações React/Next.js.



* Exemplos 

&nbsp;	Para buscar dados, geralmente usamos métodos HTTP:

&nbsp;		- GET: Buscar informações (ex: listar produtos).

&nbsp;		- POST: Enviar novos dados (ex: criar um usuário).

&nbsp;		- PUT/PATCH: Atualizar dados existentes.

&nbsp;		- DELETE: Remover informações.JSON

&nbsp;	Exemplo de uma resposta comum de API em formato JSON:

&nbsp;	{

&nbsp; 		"id": 1,

&nbsp; 		"nome": "Teclado Mecânico",

&nbsp; 		"preco": 250.00,

&nbsp; 		"disponivel": true

&nbsp;	}

