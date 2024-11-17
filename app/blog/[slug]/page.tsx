import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { notFound } from 'next/navigation'

interface Article {
  titulo: string
  data: string
  categoria: string
  conteudo: string
  imagemCapa: string
}

type ArticleContent = {
  [key: string]: Article
}

const articleContent: ArticleContent = {
  'aprofundando-a-importancia-dos-kpis-no-comissionamento': {
    titulo: "Aprofundando a Importância dos KPIs no Comissionamento",
    data: "23 Mar 2024",
    categoria: "Gestão",
    conteudo: `
      <div class="prose prose-lg">
        <p>No cenário atual do comissionamento industrial, os Key Performance Indicators (KPIs) emergiram como ferramentas essenciais para medir, avaliar e otimizar o desempenho dos processos. Este artigo explora em profundidade como os KPIs podem transformar a maneira como gerenciamos e executamos o comissionamento de plantas industriais.</p>

        <h2>A Importância dos KPIs no Comissionamento</h2>
        <p>Os KPIs no comissionamento servem como bússolas que guiam as equipes em direção aos objetivos estabelecidos. Eles permitem:</p>
        <ul>
          <li>Monitoramento em tempo real do progresso</li>
          <li>Identificação precoce de problemas</li>
          <li>Tomada de decisões baseada em dados</li>
          <li>Melhoria contínua dos processos</li>
        </ul>

        <h2>KPIs Essenciais para o Comissionamento</h2>
        <p>Alguns dos principais KPIs que devem ser considerados incluem:</p>
        <ol>
          <li>Taxa de conclusão de testes</li>
          <li>Tempo médio entre falhas</li>
          <li>Eficiência do comissionamento</li>
          <li>Conformidade com requisitos</li>
          <li>Custos vs. Orçamento</li>
        </ol>

        <h2>Implementando KPIs Efetivos</h2>
        <p>Para implementar KPIs efetivos no comissionamento, é necessário:</p>
        <ul>
          <li>Definir objetivos claros e mensuráveis</li>
          <li>Estabelecer métricas relevantes</li>
          <li>Coletar dados precisos</li>
          <li>Analisar resultados regularmente</li>
          <li>Ajustar estratégias conforme necessário</li>
        </ul>

        <h2>Benefícios dos KPIs no Comissionamento</h2>
        <p>A utilização adequada de KPIs traz diversos benefícios:</p>
        <ul>
          <li>Maior visibilidade do progresso</li>
          <li>Melhor alocação de recursos</li>
          <li>Redução de custos</li>
          <li>Aumento da qualidade</li>
          <li>Maior satisfação do cliente</li>
        </ul>

        <h2>Conclusão</h2>
        <p>Os KPIs são fundamentais para o sucesso do comissionamento moderno. Ao implementar um sistema robusto de medição e acompanhamento de indicadores, as organizações podem melhorar significativamente seus processos e resultados.</p>
      </div>
    `,
    imagemCapa: "/images/blog.png"
  },
  'detalhando-o-processo-de-comissionamento': {
    titulo: "Detalhando o Processo de Comissionamento",
    data: "22 Mar 2024",
    categoria: "Comissionamento",
    conteudo: `
      <div class="prose prose-lg">
        <p>O processo de comissionamento é uma fase crítica na implementação de sistemas industriais, garantindo que todos os componentes e sistemas funcionem conforme especificado. Este artigo detalha as etapas essenciais do processo de comissionamento.</p>

        <h2>O que é Comissionamento?</h2>
        <p>Comissionamento é o processo sistemático de verificar, inspecionar e testar cada componente e sistema de uma planta industrial, garantindo que tudo funcione de acordo com os requisitos do projeto e as necessidades operacionais.</p>

        <h2>Fases do Comissionamento</h2>
        <h3>1. Pré-comissionamento</h3>
        <ul>
          <li>Verificação de documentação</li>
          <li>Inspeção visual</li>
          <li>Testes preliminares</li>
          <li>Calibração de instrumentos</li>
        </ul>

        <h3>2. Comissionamento</h3>
        <ul>
          <li>Testes funcionais</li>
          <li>Verificação de sistemas</li>
          <li>Ajustes e configurações</li>
          <li>Testes integrados</li>
        </ul>

        <h3>3. Start-up</h3>
        <ul>
          <li>Inicialização de sistemas</li>
          <li>Testes de performance</li>
          <li>Ajustes finais</li>
          <li>Documentação</li>
        </ul>

        <h2>Boas Práticas</h2>
        <p>Para um comissionamento eficiente, é importante:</p>
        <ul>
          <li>Planejar detalhadamente</li>
          <li>Documentar todos os processos</li>
          <li>Manter comunicação clara</li>
          <li>Seguir procedimentos de segurança</li>
          <li>Treinar adequadamente a equipe</li>
        </ul>

        <h2>Desafios Comuns</h2>
        <p>Alguns desafios frequentes incluem:</p>
        <ul>
          <li>Prazos apertados</li>
          <li>Complexidade dos sistemas</li>
          <li>Coordenação entre equipes</li>
          <li>Mudanças de escopo</li>
          <li>Gestão de documentação</li>
        </ul>

        <h2>Conclusão</h2>
        <p>Um processo de comissionamento bem executado é fundamental para o sucesso de qualquer projeto industrial. Seguir as etapas adequadamente e manter boas práticas garante uma operação eficiente e segura.</p>
      </div>
    `,
    imagemCapa: "/images/blog.png"
  },
  'comissionamento-em-projetos-industriais': {
    titulo: "Comissionamento em Projetos Industriais",
    data: "21 Mar 2024",
    categoria: "Comissionamento",
    conteudo: `
      <div class="prose prose-lg">
        <p>O comissionamento é uma fase crítica em projetos industriais, especialmente nos setores de petróleo e gás, energia e químico. Este artigo explora os aspectos fundamentais do comissionamento industrial e suas melhores práticas.</p>

        <h2>Fundamentos do Comissionamento Industrial</h2>
        <p>O comissionamento industrial envolve a verificação e teste sistemático de todos os componentes e sistemas de uma planta, garantindo que:</p>
        <ul>
          <li>Os equipamentos estejam instalados corretamente</li>
          <li>Os sistemas funcionem conforme projetado</li>
          <li>A documentação esteja completa e precisa</li>
          <li>As equipes estejam treinadas adequadamente</li>
        </ul>

        <h2>Etapas do Processo</h2>
        <ol>
          <li>Planejamento inicial</li>
          <li>Verificação de instalação</li>
          <li>Testes funcionais</li>
          <li>Integração de sistemas</li>
          <li>Testes de performance</li>
          <li>Documentação e entrega</li>
        </ol>

        <h2>Aspectos Críticos</h2>
        <p>Alguns pontos críticos que requerem atenção especial:</p>
        <ul>
          <li>Segurança operacional</li>
          <li>Conformidade regulatória</li>
          <li>Gestão de qualidade</li>
          <li>Controle de documentação</li>
          <li>Treinamento de pessoal</li>
        </ul>

        <h2>Melhores Práticas</h2>
        <p>Para um comissionamento bem-sucedido, recomenda-se:</p>
        <ul>
          <li>Planejamento detalhado</li>
          <li>Comunicação efetiva</li>
          <li>Documentação precisa</li>
          <li>Gestão de mudanças</li>
          <li>Monitoramento contínuo</li>
        </ul>

        <h2>Benefícios</h2>
        <p>Um comissionamento bem executado proporciona:</p>
        <ul>
          <li>Maior confiabilidade operacional</li>
          <li>Redução de custos de manutenção</li>
          <li>Melhor desempenho dos sistemas</li>
          <li>Maior segurança</li>
          <li>Documentação completa</li>
        </ul>

        <h2>Conclusão</h2>
        <p>O comissionamento é fundamental para o sucesso de projetos industriais. Seguir as melhores práticas e manter um processo sistemático garante uma operação eficiente e segura.</p>
      </div>
    `,
    imagemCapa: "/images/blog.png"
  },
  'industrial-plants-commissioning-procedures': {
    titulo: "Industrial Plants Commissioning Procedures Using Digital Process-Oriented Architecture",
    data: "24 Mar 2024",
    categoria: "Comissionamento",
    conteudo: `
      <div class="prose prose-lg">
        <!-- Autores e Afiliações -->
        <div class="flex flex-col gap-4 mb-8">
          <p class="text-center italic">
            Daniel Luiz de Mattos Nascimento*, Alessandra Brancher Roeder**, Diego Calvetti***, Alejandro Menés Mustelier**, Fernando Rodrigues Gonzalez****, Flavio Ney Magno de Araújo**
          </p>

          <div class="text-sm text-gray-600 space-y-1">
            <p>*University of Jaén, Jaén, 23700 Linares, Spain (e-mail: dmattos@ujaen.es)</p>
            <p>**CERTI Foundation, Florianopolis, 88040970, Brazil (e-mail: are@certi.org.br; e-mail: atn@certi.org.br; e-mail: fna@certi.org.br)</p>
            <p>***Construction Institute, CONSTRUCT/Gequaltec, Porto University, Portugal, (e-mail: diegocalvetti@fe.up.pt)</p>
            <p>****Federal Fluminense University, Industrial Construction Department (e-mail: fernandorgonza@gmail.com)</p>
          </div>
        </div>

        <!-- 1. INTRODUCTION -->
        <h2 class="text-2xl font-bold mb-4">1. INTRODUCTION</h2>
        <p class="mb-4">Brazil has abundant reserves and exponential growth potential for oil exploration for the coming decades (IBP, 2019). Thus, several industrial plants' construction, commissioning, and operation are required to meet the demand. Therefore, the digitalisation of industrial plants' commissioning activities will ensure high-quality assurance and data traceability with fewer errors (Jain, Vera and Harrison, 2010) and more productivity (Lu et al., 2019).</p>

        <p class="mb-4">Projects in the O&G (Oil and Gas) industry are characterised by huge investments, massive interfaces, and complex engineering endeavours (Badiru and Osisanya, 2013). Due to the size and complexity of these projects, special attention to the project management process is required, targeting to increase efficiency (Badiru and Osisanya, 2013; Nascimento et al., 2020).</p>

        <p class="mb-4">The commissioning phase is regarding on-site checking of all equipment and systems installed to test performance and ensure final compliance (Arnold, 2017). Although some applications based on information technologies have already started to bring digital solutions to the field, on-site procedures of inspection and tests are mainly still managed by paper-work-based conventional methods (Borrmann et al., 2018; Nascimento et al., 2018). Lacking interoperability and the use of proprietary closed software systems are persisting issues that inhibit digital process-oriented management (Lu et al., 2019) and make the system prone to error (Palmer et al., 2018).</p>

        <p class="mb-8">Based on that, CERTI Foundation, a Centre of Reference in Innovative Technologies, and an O&G Company from Brazil, started a research and technological development project to implement a digital solution to deploy commissioning process-task-based. The project aims to develop a web-based system with a mobile application interface that can implement commissioning procedures customised by engineers (e.g., inspections and tests) to be deployed on-site. The on-site workforce can receive and record the execution of the task's information on mobile devices.</p>

        <!-- 2. METHODOLOGY -->
        <h2 class="text-2xl font-bold mb-4">2. METHODOLOGY</h2>
        
        <h3 class="text-xl font-bold mb-3">2.1 Research design</h3>
        <p class="mb-4">The research has begun with a literature review to acknowledge relevant research studies. Then, to understand how the commissioning process is carried out on-site and the company needs, data and requirements were collected and analysed through interviews, meetings, document reading, discussions, mapping process and customer validation. During the commissioning process mapping development, follow-up meetings and doubts clarifications were held frequently.</p>

        <p class="mb-8">Moreover, after completing the map of each stage, a meeting was held with the team responsible for managing the commissioning to validate the process map as an accurate and truthful representation. Based on this analysis, the future mapping of commissioning execution phases steps was developed with the software development team to ensure that the necessary features would be included in the new system. Then, the validation of the mappings took place with the commissioning management team.</p>

        <h3 class="text-xl font-bold mb-3">2.2 Data collection</h3>
        <p class="mb-4">After defining the scope of this paper, a scoping review, a growing method that allows a better understanding of existing scientific evidence (Armstrong et al., 2011), was carried out to map the existing research in the O&G on-site commissioning of offshore plants. Web of Science and Elsevier's Scopus search engines (Julianelli et al., 2020) was used in January 2022 to gather relevant literature.</p>

        <p class="mb-4">The search string was set to narrow the scope of this research, including the keywords, commissioning, offshore, oil and gas, on-site, inspection and verification, being used on both search engines: ALL((commissioning AND on*site AND offshore AND "oil and gas") OR (commissioning AND on*site AND offshore AND "O&G") OR (commissioning AND inspection AND offshore AND "oil and gas") OR (commissioning AND inspection AND offshore AND "O&G") OR (commissioning AND verification AND offshore AND "oil and gas") OR (commissioning AND verification AND offshore AND "O&G")). The documentation selection process was: a) Documents identified through SCOPUS and Web of Science N = 102; b) Documents discarded N = 91; c) Documents after abstract screen N = 11; d) Documents discarded N = 9; e) Documents after full text screen N = 2.</p>

        <p class="mb-4">Although adopting approaches such as "snowballing" and references-of-references techniques (Greenhalgh and Peacock, 2005), it was impossible to find scientific literature related to the research scope. However, based on the authors' backgrounds and previous works, some documents were selected as relevant references for the content of the study.</p>

        <p class="mb-4">Data collection started with the participation of the CERTI Foundation and the O&G Company in two training sessions, one on the commissioning process and the other on the current database software system. Subsequently, the O&G Company made several supplementary documents available, such as Auxiliary documentation for commissioning training; Commissioning activity reports; Description of functional processes, and Examples of files generated during the commissioning process.</p>

        <p class="mb-8">In addition to the documents, the O&G Company allowed a staging environment of the database system used, making tests to acknowledge its use, its flow, and its difficulties. In addition, meetings were held with the company's commissioning engineers for possible explanations and clarification of doubts. The training and discussions with the company were with multiple investigators, which increases the potential for discoveries (Voss, Tsikriktsis and Frohlich, 2002). The data, information and documents collected came directly from the company studied, growing the accuracy and reliability of the research (Voss, Tsikriktsis and Frohlich, 2002).</p>

        <h3 class="text-xl font-bold mb-3">2.3 Data analysis</h3>
        <p class="mb-4">A team of researchers performed analyses to avoid the possibility of biased and prejudiced interpretations. During the validation stage, several meetings ensured that the representation of the process was as accurate as possible. The final commissioning process mapping version was evaluated and validated by three qualified professionals in the area.</p>

        <p class="mb-8">With the certainty that the process and procedures were well understood, the analysis began to carry out the new digital commissioning process proposal. At this stage, each activity was thought of critically and considered: the difficulties of the performers during the execution; suggestions for improvements given by those involved; bottlenecks observed in the process and the need for a specific task to happen.</p>

        <!-- 3. LITERATURE REVIEW -->
        <h2 class="text-2xl font-bold mb-4">3. LITERATURE REVIEW</h2>
        <p class="mb-4">Once O&G projects design, procurement, and assembly start to be consolidated, a detailed commissioning process is mandatory before plant operations (Wanasinghe et al., 2020). The commissioning can be defined as the process that guarantees that the assets will be delivered to users in complete conditions, with all tests and preservation carried out and updated documentation (ASHRAE Handbook, 2011).</p>

        <p class="mb-4">The commissioning process is time-consuming and can be associated with health, safety and environmental (HSE) risks (Wanasinghe et al., 2020). After commissioning has been carried out, the installation must operate in an integrated, stable, safe, and profitable manner. It starts at the component and equipment level and proceeds logically towards subsystems, systems and installing units.</p>

        <p class="mb-4">The following vital concepts explained are relative to the O&G Company in question and are essential for better understanding the commissioning process: Commissionable tagged items – Any physical component that has a function or supports some process and can be effectively installed; Systems Mesh verification – Interconnected set of commissionable items and lines that interconnected allows monitoring and control different process variables; Preservation – This is a cyclical process of a set of tasks and activities that aim to preserve the good conditions and functioning of the items that constitute the industrial plant.</p>

        <p class="mb-4">According to Francis (2006), the main objectives of commissioning are: Ensuring a quick and efficient start-up; Validate that the project assembly team installed following the specified requirements; Ensure that all tests have been carried out before production begins; Demonstrate and document that all systems are operational; Identify deficiencies and make corrections; Adjust or modify equipment for better operability and maintenance; Have all complete transfer documentation (Databook); Ensuring commissioning progress is in line with project requirements and asset long-term goals (Francis, 2006).</p>

        <!-- Figura 1 -->
        <div class="my-8">
          <img 
            src="/images/blog/figure1-commissioning-as-is.webp" 
            alt="Commissioning process as is"
            class="rounded-lg shadow-lg w-full"
          />
          <p class="text-sm text-gray-500 mt-2 text-center">
            Figure 1: Commissioning process "as is"
          </p>
        </div>

        <p class="mb-4">While for (David Horsley, 1998), activities can be separated into pre-commissioning and commissioning, Bendiksen and Young (2005) considered commissioning a unique phase that falls within the preparation and execution phases. However, regardless of how the person in charge will divide the project, to carry out good management of the commissioning information, all the data should be integrated and managed through systems and databases.</p>

        <p class="mb-4">The organisation must control the system and not the other way around since its objective is to help the process and not cause entropies. Also, user interface problems can drain time and resources (Bendiksen and Young, 2005). Most important, beyond the interface, when there is clear and fast communication between the stakeholders, many project issues can be avoided (Badiru and Osisanya, 2013). Therefore, efficient systems and software are essential to achieve the commissioning project's success.</p>

        <p class="mb-4">For example, the industrial plant can be pre-tuned using a high-fidelity digital twin, and the systems can be verified for a correct operation (Wanasinghe et al., 2020). Also, a virtual approach can reduce the commissioning time required and decrease the HSE risk (Wanasinghe et al., 2020).</p>

        <p class="mb-4">However, to communicate, the software is integrated into different languages and needs to convert to have a fully integrated data change. However, the integration is prone to error, with a lack of completion and low accuracy for the results because some systems do not understand what the search field means (Palmer et al., 2018).</p>

        <p class="mb-4">According to the NBIMS Institute (2007) the IDM is used to organise the data needed for each type of exchange in the process. They are, by definition, a subset of the entire installation data model (ISO/DIS 29481-1, 2014). It also provides detailed specifications of the information that a particular user or group needs at a given time (ISO). ISO 29481-1 recommends the Business Process Modelling Notation (BPMN) approach for representing process mapping (ISO/DIS 29481-1, 2014).</p>

        <p class="mb-4">According to Pinheiro et al., (2018) the IDM has two parts, the first consists of components that define the processes performed by those involved and the exchange requirements associated with these processes and the second part is equivalent to the interfaces between different software and is format dependent of the Industry Foundation Classes (IFC). The neutral language, or IFC, is a neutral and open data format standardised by the ISO 16739-1 standard and used for modelling activities and attributes related to an engineering project (NBIMS, 2007).</p>

        <p class="mb-4">In the exchange of data, there is an incompatibility in the information structure caused by the semantic and syntax incompatibility of the information, and a problem sought to solve is interoperability (Imran and Young, 2016). There is no need for a translation process between software in interoperability because they utilise neutral language (Laakso and Kiviniemi, 2012).</p>

        <p class="mb-4">According to Lu et al., (2019) the digitisation process has already begun, but in a long way. Stadnicka et al., (2020), present methods and tools for SMEs' complex product manufacturing process work organisation without ubiquitous human intervention. There is already some experimentation in asset-level technology, but it cannot be said that there are interdisciplinary integration technologies.</p>

        <!-- Figura 2 -->
        <div class="my-8">
          <img 
            src="/images/blog/figure2-commissioning-to-be.webp" 
            alt="Digital Commissioning process as to be"
            class="rounded-lg shadow-lg w-full"
          />
          <p class="text-sm text-gray-500 mt-2 text-center">
            Figure 2: Digital Commissioning process "as to be"
          </p>
        </div>

        <p class="mb-4">Process digitisation is one of the goals in the new era of technologies. Still, only a few companies have reached a good level of this, and the industry is losing some great opportunities to use data and technologies in significant ways (Lu et al., 2019). So, it is time for this area to rely on and invest in automated systems, digitally connected infrastructure, and interoperable data exchange.</p>

        <p class="mb-4">In a commissioning project, poorly done/prepared documentation can significantly threaten the project performance (Bendiksen and Young, 2005). Panggabean and Girsang (2019) created a middleware Service-Oriented Architecture to integrate applications (e.g., desktop and mobile) for Mechanical Completion and Commissioning phase (Panggabean and Girsang, 2019).</p>

        <p class="mb-4">Documents and information management are crucial for the O&G industry and directly influence project quality assurance (Samie, 2016). In a non-automated process, paper document forms will directly prove that the process was carried out correctly. The documents generated during the commissioning process must harmonise with each other and correspond to the project requirements (Samie, 2016).</p>

        <p class="mb-4">In addition, according to Bendiksen and Young (2005), the preparation, at the last moment, of documents to deliver to the client is one of the most common factors in project delay. Another element that can cause a significant delay in the O&G projects schedule is preservation. In research carried out by Bendiksen and Young (2005), poor preservation has historically appeared as a cause of delay 10% to 20% of the time.</p>

        <p class="mb-8">The generation and use of periodic reports are also essential for the commissioning execution. At this point, the responsible team can exchange information about the project progress and identify areas of concern (Bendiksen and Young, 2005). Therefore, it is essential to use a system that allows the control, storage and management of documents, procedures and activities involved in the project. Furthermore, that allows the visualisation of the process clearly and the communication between those involved.</p>

        <!-- 4. COMMISSIONING STATUS QUO IDENTIFIED -->
        <h2 class="text-2xl font-bold mb-4">4. COMMISSIONING STATUS QUO IDENTIFIED</h2>
        <p class="mb-4">The O&G commissioning process studied is currently performed in a database software system comprising planning, execution, and control. The on-site work execution is mainly based on three actions: commissioning of tagged items verification, systems mesh verification, and preservation routines. The process cycle model "As Is" can be seen in Figure 1, where it was only considering the key activities to condense information into a BPMN well known notation. The process described in this work does not deal with the approval process or the controlling processes. Only the execution cycle is presented and analysed, and the business process was modelled as if all approvals were positive.</p>

        <p class="mb-4">As represented in Figure 1, it is possible to observe the process's current main stages, coloured in orange the commissioning of tagged items verification activities, green the verification of systems mesh, blue the preservation as in white colour the database system use. The first thing that should be considered is that the actual database system works with a fixed process. It means that the process must happen as designed in the first version of the system. It is not possible to update, change or customise the main tasks. Second, all the processes are performed based on printed paper forms. As activities performed are later recorded on the system by human input.</p>

        <!-- Figura 3 -->
        <div class="my-8">
          <img 
            src="/images/blog/figure3-digital-architecture.webp" 
            alt="Digital Process-Oriented Architecture"
            class="rounded-lg shadow-lg w-full"
          />
          <p class="text-sm text-gray-500 mt-2 text-center">
            Figure 3: Digital Process-Oriented Architecture
          </p>
        </div>

        <p class="mb-4">After the Engineers releases the project tagged items over the database system, the on-site commissioning routines are performed. The Executant Workforce (mainly inspectors) receives a paper form with the procedures to verify the tagged items. Following on-site tagged items verification, the executants deliver the paper forms checked to Systems Operators to update the database. At the same time, System Operators can release the preservation procedures on the system and must place paper forms of each procedure over each tagged item on-site.</p>

        <p class="mb-4">Preservation executant teams will perform the procedures and record execution over the paper forms in each tagged item. The preservation routines will be continually timely-based, conducted as specifications until the systems are ready to be fully/partially operated (assisted operation). So, after it, a System Operator collects the information filled in the printed procedures to input this data in the system database.</p>

        <p class="mb-8">The engineers will approve tagged items verification activities and consolidate them over specific systems meshes. When a system mesh is completed, it means when all tagged items that compose this mesh are verified, the System Operators can release the systems mesh verification procedures. The executors' workforce receives a paper form with the systems mesh verification procedures, executes them, fills the paper forms, and sends them to the system operator, who oversees updating the system. After that, the engineers will approve the execution of the systems mesh verification procedures.</p>

        <!-- 5. DIGITAL COMMISSIONING PROCEDURES USING PROCESS-ORIENTED ARCHITECTURE -->
        <h2 class="text-2xl font-bold mb-4">5. DIGITAL COMMISSIONING PROCEDURES USING PROCESS-ORIENTED ARCHITECTURE</h2>
        <p class="mb-8">A new system concept of a digital process was developed based on the status quo identified. That system will integrate with the existing database software system and automate the execution and controlling actions of the commissioning activities. The following subsections will present the systems and technologies applied and the target digital process to be deployed.</p>

        <h3 class="text-xl font-bold mb-3">5.1 The process as to be</h3>
        <p class="mb-4">The process to be is seen in figure 2, in orange coloured, the Commissionable tagged items new main stages, in green the mesh systems verification and blued the preservation activities. All paper-related steps have been eliminated. With the new system, the executors can see the procedures directly in the mobile application and make the input of the pieces of information regarding the activities. It will no longer be necessary to have a dedicated system operator to collect data and record it on to the system.</p>

        <p class="mb-8">Any process needs continuous improvement and change flexibilization and the commissioning process is not different. Due to this, the in-development system has a prominent feature of dynamics in the process, represented in Figure 2 in red, where the engineers can see the process in a BPMN notation, make the desired modifications and then the system will adapt his workflow to satisfy the new demands. This way, the software will have embedded continuous improvement since it is possible to analyse, see what needs to change and do the needs alterations.</p>

                <h3 class="text-xl font-bold mb-3">5.2 Systems and Technologies</h3>
        <p class="mb-8">The new system in development allows the entire process to be done digitally. Figure 3 presents the systems concept. There is no need for printed procedures, and the recorded information is sent by mobile devices to cloud storage. The system application has a significant differential that is a dynamic process. The engineers can customise the process as they want. The system has a web application and a mobile application with the same interface. Nevertheless, the mobile has as target audience the on-site end-users (executants) that will receive the tasks and record the work done. The engineers will use the web system for configuration, customisation, and validation of the execution of the tasks. The system will provide data traceability and interoperability through the IFC standard data model.</p>

        <!-- 6. FINAL REMARKS AND FUTURE RESEARCH DIRECTIONS -->
        <h2 class="text-2xl font-bold mb-4">6. FINAL REMARKS AND FUTURE RESEARCH DIRECTIONS</h2>
        <p class="mb-4">The mapping of the current commissioning procedures of O&G industrial plants made it possible to represent and analyse the processes and activities, allowing the identification of several possibilities for improvement and digitalisation. The proximity to the commissioning managing team and the direct access to the O&G Company's data, training, and documents facilitated the understanding of the process.</p>

        <p class="mb-4">The proposed changes mainly consist of implementing a digital solution, eliminating paperwork, automating activities and information management, increasing evidence of activities being carried out on-site and improving communication and integration of the systems and sectors involved.</p>

        <p class="mb-8">The proposal of these changes resulted in future state maps that, when fully implemented, can reduce process time, increase quality assurance, and eliminate activities that do not generate value, facilitating workers' routines with digital data traceability (Tortorella et al., 2020). Future research and development will integrate this digital tool with Building Information Modelling (BIM) and implement new processes using IoT (Internet of Things) to control hazardous energy during commissioning activities.</p>

        <!-- REFERENCES -->
        <h2 class="text-2xl font-bold mb-4">REFERENCES</h2>
        <div class="space-y-2 text-sm">
          <p>Armstrong, R. et al. (2011) '"Scoping the scope" of a cochrane review', Journal of Public Health, 33(1), pp. 147–150.</p>
          <p>Arnold, K.E. (2017) Petroleum Engineering Handbook. Society of Petroleum Engineers.</p>
          <p>ASHRAE Handbook (2011) Heating, ventilating, and air-conditioning applications. Inc.: Atlanta, GA, USA.</p>
          <p>Badiru, A.B. and Osisanya, S.O. (2013) Project Management for the Oil and Gas Industry: A World System Approach. CRC Press.</p>
          <p>Bendiksen, T. and Young, G. (2005) Comissioning of Offshore Oil and Gas Projects: The Manager's Handbook. AuthorHouse.</p>
          <p>Borrmann, A. et al. (2018) 'Building Information Modeling: Why? What? How?', Building Information Modeling. Springer International Publishing.</p>
          <p>David Horsley (1998) Process Plant Commissioning: a user guide. IChemE.</p>
          <p>Francis, R. (2006) 'The end of the Beginning', Engineering Asset Management. Springer.</p>
          <p>Greenhalgh, T. and Peacock, R. (2005) 'Effectiveness and efficiency of search methods in systematic reviews of complex evidence: audit of primary sources', BMJ, 331(7524).</p>
          <p>IBP (2019) 2019 Report. IBP - Instituto Brasileiro de Petróleo, Gás e Biocombustíveis.</p>
          <p>Imran, M. and Young, R.I.M. (2016) 'Reference ontologies for interoperability across multiple assembly systems', International Journal of Production Research, 54(18).</p>
          <p>ISO/DIS 29481-1 (2014) 'Building information models - Information delivery manual - Part 1: Methodology and format'. International Organisation for Standardisation.</p>
          <p>Laakso, M. and Kiviniemi, A. (2012) 'The IFC Standard - A Review Of History, Development, And Standardization', Journal of Information Technology in Construction.</p>
          <p>Lu, H. et al. (2019) 'Oil and Gas 4.0 era: A systematic review and outlook', Computers in Industry, 111.</p>
          <p>NBIMS (2007) National Building Information Modeling Standard Version 1 - Part 1: Overview, Principles, and Methodologies. National Institute of Building Sciences.</p>
          <p>Palmer, C. et al. (2018) 'Interoperable manufacturing knowledge systems', International Journal of Production Research, 56(8).</p>
          <p>Samie, N.N. (2016) Practical Engineering Management of Offshore Oil and Gas Platforms. Elsevier.</p>
          <p>Voss, C., Tsikriktsis, N. and Frohlich, M. (2002) 'Case research in operations management', International Journal of Operations & Production Management, 22(2).</p>
          <p>Wanasinghe, T.R. et al. (2020) 'Digital Twin for the Oil and Gas Industry: Overview, Research Trends, Opportunities, and Challenges', IEEE Access, 8.</p>
        </div>
      </div>
    `,
    imagemCapa: "/images/blog.png"
  }
}

export default function Article({ params }: { params: { slug: string } }) {
  const article = articleContent[params.slug]

  if (!article) {
    notFound()
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/blog.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg p-8">
            {/* Voltar */}
            <Link href="/blog">
              <Button variant="outline" className="mb-8">
                ← Voltar para o Blog
              </Button>
            </Link>

            {/* Cabeçalho do Artigo */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-gray-500">{article.data}</span>
                <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {article.categoria}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {article.titulo}
              </h1>
            </div>

            {/* Conteúdo do Artigo */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.conteudo }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}