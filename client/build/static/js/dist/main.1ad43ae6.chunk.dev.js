"use strict";

((void 0)["webpackJsonpprojects-ui"] = (void 0)["webpackJsonpprojects-ui"] || []).push([[0], {
  140: function _(e, t, c) {},
  141: function _(e, t, c) {},
  163: function _(e, t, c) {
    "use strict";

    c.r(t);
    var a = c(0),
        n = c.n(a),
        r = c(31),
        s = c.n(r),
        i = (c(140), c(6)),
        o = (c(141), c(203)),
        j = c(209),
        l = c(204),
        d = c(207),
        u = c(64),
        b = c(125),
        p = c.n(b),
        h = c(126),
        O = c.n(h),
        x = c(127),
        m = c.n(x),
        f = c(128),
        v = c.n(f),
        y = c(41),
        g = c(15),
        S = c(37),
        N = c(56),
        T = c(1);

    var F = function F(e) {
      var t = e.project,
          c = e.onDelete,
          a = e.onEdit;
      return Object(T.jsxs)("div", {
        style: {
          padding: "2px"
        },
        children: [Object(T.jsx)("br", {}), Object(T.jsx)("h3", {
          children: t.name
        }), Object(T.jsx)("button", {
          className: "button-small",
          onClick: function onClick() {
            a(t);
          },
          children: "Edit"
        }), Object(T.jsx)("button", {
          className: "button-small",
          onClick: function onClick() {
            window.confirm("Are you sure you wish to delete this item?") && c(t._id);
          },
          children: "Delete"
        }), Object(T.jsxs)("p", {
          style: {
            fontSize: "small"
          },
          children: [t.status, " - ", t.date]
        }), Object(T.jsx)("p", {
          style: {
            fontSize: "small"
          },
          children: t.link
        }), Object(T.jsx)("p", {
          style: {
            fontSize: "small"
          },
          children: t.description
        })]
      });
    };

    var E = function E(e) {
      var t = e.projects,
          c = e.onDelete,
          a = e.onEdit;
      return Object(T.jsx)("div", {
        style: {
          width: "100%"
        },
        children: t.map(function (e, t) {
          return Object(T.jsx)(F, {
            project: e,
            onDelete: c,
            onEdit: a
          }, t);
        })
      });
    };

    var C = function C(e) {
      var t = e.setProjectToEdit,
          c = Object(a.useState)([]),
          n = Object(i.a)(c, 2),
          r = n[0],
          s = n[1],
          o = Object(g.e)(),
          j = function () {
        var e = Object(N.a)(Object(S.a)().mark(function e(t) {
          var c;
          return Object(S.a)().wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, fetch("/projects/".concat(t), {
                    method: "DELETE"
                  });

                case 2:
                  204 === (c = e.sent).status ? s(r.filter(function (e) {
                    return e._id !== t;
                  })) : console.error("Failed to delete project with _id = ".concat(t, ", status code = ").concat(c.status));

                case 4:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
          l = function () {
        var e = Object(N.a)(Object(S.a)().mark(function e(t) {
          var c, a;
          return Object(S.a)().wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, fetch("/projects");

                case 2:
                  return c = e.sent, e.next = 5, c.json();

                case 5:
                  a = e.sent, s(a);

                case 7:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }();

      return Object(a.useEffect)(function () {
        l();
      }, []), Object(T.jsx)("div", {
        children: Object(T.jsx)(E, {
          projects: r,
          onDelete: j,
          onEdit: function onEdit(e) {
            t(e), o.push("/edit-project");
          }
        })
      });
    },
        k = function k() {
      var e = Object(a.useState)(""),
          t = Object(i.a)(e, 2),
          c = t[0],
          n = t[1],
          r = Object(a.useState)("In Progress"),
          s = Object(i.a)(r, 2),
          o = s[0],
          j = s[1],
          l = Object(a.useState)(""),
          d = Object(i.a)(l, 2),
          u = d[0],
          b = d[1],
          p = Object(a.useState)(""),
          h = Object(i.a)(p, 2),
          O = h[0],
          x = h[1],
          m = Object(a.useState)(""),
          f = Object(i.a)(m, 2),
          v = f[0],
          y = f[1],
          F = Object(g.e)(),
          E = function () {
        var e = Object(N.a)(Object(S.a)().mark(function e() {
          var t, a;
          return Object(S.a)().wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return t = {
                    name: c,
                    status: o,
                    description: u,
                    link: O,
                    date: v
                  }, e.next = 3, fetch("/projects", {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                      "Content-Type": "application/json"
                    }
                  });

                case 3:
                  201 === (a = e.sent).status ? (console.log(t), alert("Successfully added the project.")) : alert("Failed to add the project, status code = ".concat(a.status)), F.push("/");

                case 6:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }();

      return Object(T.jsxs)("div", {
        children: [Object(T.jsx)("h2", {
          children: "Add Project"
        }), Object(T.jsx)("input", {
          type: "text",
          placeholder: "Enter name here...",
          value: c,
          onChange: function onChange(e) {
            return n(e.target.value);
          },
          className: "projectField"
        }), Object(T.jsxs)("select", {
          type: "text",
          value: o,
          onChange: function onChange(e) {
            return j(e.target.value);
          },
          className: "projectField",
          children: [Object(T.jsx)("option", {
            defaultValue: "In Progress",
            value: "In Progress",
            children: "In Progress"
          }), Object(T.jsx)("option", {
            value: "Completed",
            children: "Completed"
          })]
        }), Object(T.jsx)("input", {
          type: "text",
          value: u,
          placeholder: "Enter description here...",
          onChange: function onChange(e) {
            return b(e.target.value);
          },
          className: "projectField"
        }), Object(T.jsx)("input", {
          type: "url",
          value: O,
          placeholder: "Enter the link to your code/project!",
          onChange: function onChange(e) {
            return x(e.target.value);
          },
          className: "projectField"
        }), Object(T.jsx)("input", {
          type: "string",
          value: v,
          placeholder: "MM-DD-YY",
          onChange: function onChange(e) {
            return y(e.target.value);
          },
          className: "projectField"
        }), Object(T.jsx)("button", {
          className: "button-medium",
          onClick: E,
          children: "Add"
        })]
      });
    },
        w = function w(e) {
      var t = e.projectToEdit,
          c = Object(a.useState)(t.name),
          n = Object(i.a)(c, 2),
          r = n[0],
          s = n[1],
          o = Object(a.useState)(t.status),
          j = Object(i.a)(o, 2),
          l = j[0],
          d = j[1],
          u = Object(a.useState)(t.description),
          b = Object(i.a)(u, 2),
          p = b[0],
          h = b[1],
          O = Object(a.useState)(t.link),
          x = Object(i.a)(O, 2),
          m = x[0],
          f = x[1],
          v = Object(a.useState)(t.date),
          y = Object(i.a)(v, 2),
          F = y[0],
          E = y[1],
          C = Object(g.e)(),
          k = function () {
        var e = Object(N.a)(Object(S.a)().mark(function e() {
          var c, a;
          return Object(S.a)().wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return c = {
                    name: r,
                    status: l,
                    description: p,
                    link: m,
                    date: F
                  }, e.next = 3, fetch("/projects/".concat(t._id), {
                    method: "PUT",
                    body: JSON.stringify(c),
                    headers: {
                      "Content-Type": "application/json"
                    }
                  });

                case 3:
                  200 === (a = e.sent).status ? alert("Successfully edited the project.") : alert("Failed to edit the project, status code = ".concat(a.status)), C.push("/");

                case 6:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }();

      return Object(T.jsxs)("div", {
        children: [Object(T.jsx)("h2", {
          children: "Edit Project"
        }), Object(T.jsx)("input", {
          type: "text",
          placeholder: "Enter name here...",
          value: r,
          onChange: function onChange(e) {
            return s(e.target.value);
          },
          className: "projectField"
        }), Object(T.jsxs)("select", {
          type: "text",
          value: l,
          onChange: function onChange(e) {
            return d(e.target.value);
          },
          className: "projectField",
          children: [Object(T.jsx)("option", {
            value: "In Progress",
            children: "In Progress"
          }), Object(T.jsx)("option", {
            value: "Completed",
            children: "Completed"
          })]
        }), Object(T.jsx)("input", {
          type: "text",
          value: p,
          placeholder: "Enter description here...",
          onChange: function onChange(e) {
            return h(e.target.value);
          },
          className: "projectField"
        }), Object(T.jsx)("input", {
          type: "url",
          value: m,
          placeholder: "Enter the link to your code/project!",
          onChange: function onChange(e) {
            return f(e.target.value);
          },
          className: "projectField"
        }), Object(T.jsx)("input", {
          type: "string",
          value: F,
          placeholder: "MM-DD-YY",
          onChange: function onChange(e) {
            return E(e.target.value);
          },
          className: "projectField"
        }), Object(T.jsx)("button", {
          className: "button-medium",
          onClick: k,
          children: "Save"
        })]
      });
    },
        D = function D() {
      return Object(T.jsxs)("div", {
        children: [Object(T.jsx)("h2", {
          children: "About :Folio"
        }), Object(T.jsx)("br", {}), Object(T.jsx)("h3", {
          children: ":Folio is designed to be a simple and intuitive portfolio and project tracking app."
        }), Object(T.jsx)("br", {}), Object(T.jsx)("p", {
          children: ":Folio itself is also a portfolio project, built with progessive technologies and practices."
        }), Object(T.jsx)("br", {}), Object(T.jsx)("p", {
          children: "This project utilizes the MERN stack:"
        }), Object(T.jsxs)("div", {
          children: [Object(T.jsx)("p", {
            children: "Mongoose database"
          }), Object(T.jsx)("p", {
            children: "Express and Nodejs in the application layer"
          }), Object(T.jsx)("p", {
            children: "React for the presentation latyer"
          })]
        })]
      });
    },
        P = c(38),
        _ = c(96),
        A = (c(155), c(206)),
        q = c(205),
        J = c(210),
        L = c(117),
        I = c(129),
        K = c(124),
        M = c.n(K);

    var G = function G() {
      var e = Object(a.useState)(0),
          t = Object(i.a)(e, 2),
          c = t[0],
          n = t[1],
          r = Object(a.useState)(0),
          s = Object(i.a)(r, 2),
          o = s[0],
          j = s[1],
          l = Object(a.useState)(0),
          d = Object(i.a)(l, 2),
          u = d[0],
          b = d[1],
          p = Object(a.useState)({}),
          h = Object(i.a)(p, 2),
          O = h[0],
          x = h[1],
          m = Object(a.useState)({}),
          f = Object(i.a)(m, 2),
          v = f[0],
          y = f[1],
          g = Object(a.useState)({}),
          S = Object(i.a)(g, 2),
          N = S[0],
          F = S[1];

      function E(e) {
        if (void 0 !== e) return e.customData = e.customData || {}, e.customData.time = new Date().getTime() - e.config.customData.startTime, e;
      }

      function C(e) {
        var t = {};
        return e.forEach(function (e) {
          t[e.key] = e.value;
        }), t;
      }

      return _.a.interceptors.request.use(function (e) {
        return e.customData = e.customData || {}, e.customData.startTime = new Date().getTime(), e;
      }), _.a.interceptors.response.use(E, function (e) {
        return Promise.reject(E(e.response));
      }), Object(T.jsx)(T.Fragment, {
        children: Object(T.jsxs)("div", {
          className: "p-4",
          children: [Object(T.jsx)("div", {
            children: Object(T.jsx)(P.d, {
              initialValues: {
                url: "http://localhost:8000/projects",
                query_data: [{}],
                header_data: [{}],
                method: "GET"
              },
              onSubmit: function onSubmit(e) {
                !function (e) {
                  var t;

                  try {
                    t = N;
                  } catch (c) {
                    return void alert("JSON data is malformed");
                  }

                  Object(_.a)({
                    url: e.url,
                    method: e.method,
                    params: C(e.query_data),
                    headers: C(e.header_data),
                    data: t,
                    validateStatus: function validateStatus() {
                      return !0;
                    }
                  })["catch"](function (e) {
                    return console.log(e);
                  }).then(function (e) {
                    void 0 !== e && (n(e.status), x(e.data), y(e.headers), j(e.customData.time), b(Object(L.a)(JSON.stringify(e.data).length + JSON.stringify(e.headers).length)));
                  });
                }(e);
              },
              children: function children(e) {
                var t = e.values;
                return Object(T.jsxs)(P.c, {
                  children: [Object(T.jsx)("div", {
                    className: "form-group",
                    children: Object(T.jsxs)("div", {
                      className: "input-group mb-4",
                      children: [Object(T.jsxs)(P.a, {
                        name: "method",
                        as: "select",
                        children: [Object(T.jsx)("option", {
                          value: "GET",
                          children: " GET "
                        }), Object(T.jsx)("option", {
                          value: "POST",
                          children: " POST "
                        }), Object(T.jsx)("option", {
                          value: "PUT",
                          children: " PUT "
                        }), Object(T.jsx)("option", {
                          value: "DELETE",
                          children: " DELETE "
                        })]
                      }), Object(T.jsx)(P.a, {
                        required: !0,
                        type: "url",
                        name: "url",
                        placeholder: "https://www.example.com",
                        className: "form-control"
                      }), Object(T.jsx)("div", {
                        className: "form-group",
                        children: Object(T.jsx)("button", {
                          className: "button-smmd",
                          style: {
                            backgroundcolor: "#0470AA"
                          },
                          type: "submit",
                          children: "Submit"
                        })
                      })]
                    })
                  }), Object(T.jsxs)(q.a, {
                    defaultActiveKey: "query-params",
                    id: "uncontrolled-tab-example",
                    className: "advLabel",
                    children: [Object(T.jsx)(J.a, {
                      eventKey: "query-params",
                      title: "Query Params",
                      children: Object(T.jsx)(P.b, {
                        name: "query_data",
                        children: function children(e) {
                          return Object(T.jsxs)("div", {
                            children: [Object(T.jsxs)(A.a, {
                              onClick: function onClick() {
                                return e.push({});
                              },
                              children: [" ", "Add", " "]
                            }), t.query_data.map(function (t, c) {
                              return Object(T.jsxs)("div", {
                                children: [Object(T.jsx)(P.a, {
                                  placeholder: "Key",
                                  name: "query_data.".concat(c, ".key"),
                                  type: "input"
                                }), Object(T.jsx)(P.a, {
                                  placeholder: "Value",
                                  name: "query_data.".concat(c, ".value"),
                                  type: "input"
                                }), Object(T.jsx)(A.a, {
                                  onClick: function onClick() {
                                    return e.remove(c);
                                  },
                                  children: "x"
                                })]
                              }, c);
                            })]
                          });
                        }
                      })
                    }), Object(T.jsx)(J.a, {
                      eventKey: "headers",
                      title: "Headers",
                      children: Object(T.jsx)(P.b, {
                        name: "header_data",
                        children: function children(e) {
                          return Object(T.jsxs)("div", {
                            children: [Object(T.jsxs)(A.a, {
                              onClick: function onClick() {
                                return e.push({});
                              },
                              children: [" ", "Add", " "]
                            }), t.header_data.map(function (t, c) {
                              return Object(T.jsxs)("div", {
                                children: [Object(T.jsx)(P.a, {
                                  placeholder: "Key",
                                  name: "header_data.".concat(c, ".key"),
                                  type: "input"
                                }), Object(T.jsx)(P.a, {
                                  placeholder: "Value",
                                  name: "header_data.".concat(c, ".value"),
                                  type: "input"
                                }), Object(T.jsx)(A.a, {
                                  onClick: function onClick() {
                                    return e.remove(c);
                                  },
                                  children: "x"
                                })]
                              }, c);
                            })]
                          });
                        }
                      })
                    }), Object(T.jsx)(J.a, {
                      eventKey: "json",
                      title: "JSON",
                      children: Object(T.jsx)(I.a, {
                        id: "a_unique_id",
                        theme: "dark_vscode_tribute",
                        colors: {
                          string: "#59A5D8",
                          backgroud: "#FFFFFF"
                        },
                        locale: M.a,
                        onChange: function onChange(e) {
                          return F(e.jsObject);
                        },
                        height: "300px"
                      })
                    })]
                  })]
                });
              }
            })
          }), Object(T.jsxs)("div", {
            children: [Object(T.jsx)("h3", {
              children: "Response"
            }), Object(T.jsxs)("div", {
              className: "d-flex my-2",
              children: [Object(T.jsxs)("div", {
                className: "projectField",
                children: ["Status: ", c]
              }), "\xa0", Object(T.jsxs)("div", {
                className: "projectField",
                children: ["Time: ", o, " ms"]
              }), "\xa0", Object(T.jsxs)("div", {
                className: "projectField",
                children: ["Size: ", u]
              })]
            }), Object(T.jsx)("div", {
              children: Object(T.jsxs)(q.a, {
                defaultActiveKey: "body",
                id: "uncontrolled-tab-example",
                className: "nav nav-tabs",
                children: [Object(T.jsx)(J.a, {
                  eventKey: "body",
                  title: "Body",
                  children: Object(T.jsx)("pre", {
                    className: "projectField",
                    children: JSON.stringify(O, null, 2)
                  })
                }), Object(T.jsx)(J.a, {
                  eventKey: "response",
                  title: "Response",
                  className: "projectField",
                  children: Object(T.jsx)("pre", {
                    children: JSON.stringify(v, null, 2)
                  })
                })]
              })
            })]
          })]
        })
      });
    };

    var z = function z() {
      var e = Object(a.useState)(),
          t = Object(i.a)(e, 2),
          c = t[0],
          n = t[1];
      return Object(T.jsx)("div", {
        className: "App",
        children: Object(T.jsxs)(y.a, {
          children: [Object(T.jsx)(j.a, {
            position: "static",
            style: {
              backgroundColor: "#0470AA"
            },
            children: Object(T.jsxs)(o.a, {
              children: [Object(T.jsx)(y.b, {
                to: "/",
                children: Object(T.jsx)(d.a, {
                  type: "button",
                  edge: "start",
                  "data-tip": !0,
                  "data-for": "homeTip",
                  style: {
                    marginRight: 20
                  },
                  "aria-label": "HomePage",
                  children: Object(T.jsx)(p.a, {})
                })
              }), Object(T.jsx)(u.a, {
                delayShow: 1e3,
                id: "homeTip",
                place: "top",
                effect: "solid",
                children: "Go to the Home page."
              }), Object(T.jsx)(l.a, {
                variant: "h3",
                style: {
                  flexGrow: 1,
                  align: "center"
                },
                children: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:Folio"
              }), Object(T.jsx)(y.b, {
                to: "/about-project",
                children: Object(T.jsx)(d.a, {
                  type: "button",
                  edge: "end",
                  "data-tip": !0,
                  "data-for": "aboutTip",
                  style: {
                    marginLeft: 20
                  },
                  "aria-label": "about-project",
                  children: Object(T.jsx)(O.a, {})
                })
              }), Object(T.jsx)(u.a, {
                delayShow: 1e3,
                id: "aboutTip",
                place: "top",
                effect: "solid",
                children: "Learn more about :Folio."
              }), Object(T.jsx)(y.b, {
                to: "/advanced",
                children: Object(T.jsx)(d.a, {
                  type: "button",
                  edge: "end",
                  "data-tip": !0,
                  "data-for": "advancedTip",
                  style: {
                    marginLeft: 20
                  },
                  "aria-label": "advanced",
                  children: Object(T.jsx)(m.a, {})
                })
              }), Object(T.jsx)(u.a, {
                delayShow: 1e3,
                id: "advancedTip",
                place: "top",
                effect: "solid",
                children: "For the tinkerers!"
              }), Object(T.jsx)(y.b, {
                to: "/add-project",
                children: Object(T.jsx)(d.a, {
                  type: "button",
                  edge: "end",
                  "data-tip": !0,
                  "data-for": "addTip",
                  style: {
                    marginLeft: 20
                  },
                  "aria-label": "add-project",
                  children: Object(T.jsx)(v.a, {})
                })
              }), Object(T.jsx)(u.a, {
                delayShow: 1e3,
                id: "addTip",
                place: "top",
                effect: "solid",
                children: "Create a new project!"
              })]
            })
          }), Object(T.jsxs)("div", {
            className: "App-header",
            children: [Object(T.jsx)("button", {
              className: "button-medium",
              onClick: c,
              "data-tip": !0,
              "data-for": "generateTip",
              children: "Give me a project idea"
            }), Object(T.jsx)(u.a, {
              delayShow: 1e3,
              id: "generateTip",
              place: "bottom",
              effect: "solid",
              children: "Call an API that generates a new project idea for you! Get inspired!"
            }), Object(T.jsx)(g.a, {
              path: "/",
              exact: !0,
              children: Object(T.jsx)(C, {
                setProjectToEdit: n
              })
            }), Object(T.jsx)(g.a, {
              path: "/about-project",
              children: Object(T.jsx)(D, {})
            }), Object(T.jsx)(g.a, {
              path: "/advanced",
              children: Object(T.jsx)(G, {})
            }), Object(T.jsx)(g.a, {
              path: "/add-project",
              children: Object(T.jsx)(k, {})
            }), Object(T.jsx)(g.a, {
              path: "/edit-project",
              children: Object(T.jsx)(w, {
                projectToEdit: c
              })
            })]
          }), Object(T.jsx)("footer", {
            children: Object(T.jsx)("p", {
              children: "\xa9 2022 Matt Tinnel"
            })
          })]
        })
      });
    },
        R = function R(e) {
      e && e instanceof Function && c.e(3).then(c.bind(null, 212)).then(function (t) {
        var c = t.getCLS,
            a = t.getFID,
            n = t.getFCP,
            r = t.getLCP,
            s = t.getTTFB;
        c(e), a(e), n(e), r(e), s(e);
      });
    };

    s.a.render(Object(T.jsx)(n.a.StrictMode, {
      children: Object(T.jsx)(z, {})
    }), document.getElementById("root")), R();
  }
}, [[163, 1, 2]]]);