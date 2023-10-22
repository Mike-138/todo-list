import './styles/style.css';
import plusIcon from './assets/icons/plus.svg';
import todoItem from './modules/todo_object';
import project from './modules/project_object';
import todoModal from './modules/modals/todo_modal';
import projectModal from './modules/modals/project_modal';
import buttonFactory from './modules/button_factory';

const projectModalHtml = projectModal.getHtml();
const projectModalInfo = projectModal.getInfo();
const todoModalHtml = todoModal.getHtml();
const todoModalInfo = todoModal.getInfo();

const renderBody = (elements) => {
  const stack = elements.slice().reverse();
  document.body.replaceChildren(projectModalHtml, todoModalHtml, projectButton, ...stack);
};

const bodyElements = [];

const projectButton = buttonFactory().addContentImage(plusIcon).build();
projectButton.classList.add('add-project-button');

projectButton.addEventListener('click', () => {
  projectModalHtml.showModal();
});

renderBody(bodyElements);

projectModalHtml.addEventListener('submit', () => {
  const newProject = project().fromObject(projectModalInfo);
  const newProjectCard = newProject.createCard();
  bodyElements.push(newProjectCard);

  const taskButton = buttonFactory().addContentImage(plusIcon).build();
  taskButton.classList.add('add-todo-button');

  taskButton.addEventListener('click', () => {
    const modalHtml = document.getElementById('todoDialog');
    const projectIndex = bodyElements.indexOf(newProjectCard);
    modalHtml.setAttribute('data-index', projectIndex);
    modalHtml.showModal();
  });

  newProjectCard.firstChild.appendChild(taskButton);

  const todoContainer = document.createElement('div');
  todoContainer.classList.add('todo-container');
  newProjectCard.appendChild(todoContainer);

  newProjectCard.addEventListener('click', () => {
    if (newProjectCard.lastChild.hasChildNodes()) {
      newProjectCard.lastChild.classList.toggle('hidden');
    }
  });

  renderBody(bodyElements);
});

todoModalHtml.addEventListener('submit', () => {
  const newTodo = todoItem().fromObject(todoModalInfo);
  const newTodoCard = newTodo.createCard();
  const currentProjectCard = bodyElements[todoModalHtml.dataset.index];
  currentProjectCard.lastChild.appendChild(newTodoCard);
  renderBody(bodyElements);
});
