const taskModel = require("../database/models/tasks");

class taskController {
  async store(req, res) {
    try {
      const task = await taskModel.create(req.body);
      res.status(200).json(task);
    } catch (erro) {
      res.status(400).json(erro);
    }
  }

  async index(req, res) {
    try {
      const tasks = await taskModel.findAll({ order: [["createdAt", "DESC"]] });
      res.status(200).json(tasks);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ msg: "tarefa não informada" });
        return;
      }
      const myTask = await taskModel.findByPk(id);
      const taskUpdated = await myTask.update(req.body);

      res.status(200).json(taskUpdated);
    } catch (erro) {
      res.status(400).json(erro);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(401).json({ msg: "task não existe" });
      }
      const taksDeleted = taskModel.destroy({ where: { id: id } });
      res.status(200).json(taksDeleted);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = new taskController();
