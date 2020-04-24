use crate::home::HomeModel;
use yew::prelude::*;
use yew_router::prelude::*;

#[derive(Debug, Switch, Clone)]
enum AppRoute {
    #[to = "/"]
    Home,
}

pub struct AppModel {}

impl Component for AppModel {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        AppModel {}
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        html! {
            <div class="wrapper">
                <div class="wrapper__menu">
                    <nav>
                        <RouterButton<AppRoute> route = AppRoute::Home > { "Home" } </RouterButton<AppRoute>>
                    </nav>
                </div>
                <div class="wrapper__content">
                     { self.get_router() }
                </div>
            </div>
        }
    }
}

impl AppModel {
    fn get_router(&self) -> Html {
        html! {
            <Router<AppRoute>
                render = Router::render(|switch: AppRoute| match switch {
                    AppRoute::Home => html! { <HomeModel /> },
                })
                redirect = Router::redirect(|_: Route| {
                    AppRoute::Home
                })
            />
        }
    }
}
