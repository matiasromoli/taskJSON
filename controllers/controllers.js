import {
  addTask,
  listTask,
  deleteTask,
} from "../src/services/operaciones.service.js";

export const controllers = {
  homeView: async (req, res) => {
    try {
      const task = await listTask();
      res.render("index", {
        message: req.flash("success_msg"),
        title: "Home",
        task,
      });
    } catch (error) {
      res.status(400);
    }
  },
  formView: (req, res) => {
    res.render("form", {
      message: req.flash("err-task"),
      title: "Form",
    });
  },
  formData: async (req, res) => {
    try {
      await addTask(req);
      req.flash("success_msg", "Task add succesfully.");
      res.redirect("/");
    } catch (error) {
      res.status(400).json(error);
    }
  },
  formDelete: async (req, res) => {
    try {
      await deleteTask(req);
      req.flash("success_msg", "Task deleted successfully.");
      res.redirect("/");
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
