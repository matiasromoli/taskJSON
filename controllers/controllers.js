import { Contenedor } from "../main.js";
const conteiner = new Contenedor("./json/data.json");

export const controllers = {
  homeView: async (req, res) => {
    const task = await conteiner.listAll();

    res.render("index", {
      message: req.flash("success_msg"),
      title: "Home",
      task,
    });
  },
  formView: (req, res) => {
    res.render("form", {
      message: req.flash("err-task"),
      title: "Form",
    });
  },
  formData: async (req, res) => {
    const newTask = {
      title: req.body.title,
      description: req.body.description,
    };

    await conteiner.save(newTask);

    req.flash("success_msg", "Task add succesfully.");
    res.redirect("/");
  },
  formDelete: async (req, res) => {
    await conteiner.delete(req.params.id);
    req.flash("success_msg", "Task deleted successfully.");
    res.redirect("/");
  },
};
