
use yew::prelude::*;
pub struct HomeModel {}
pub enum HomeMsg {}

impl Component for HomeModel {
    type Message = HomeMsg;
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        HomeModel {}
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <div class="wrapper--home">
                <div class="wrapper--home__content">
                    <img src="/images/portrait.png" alt="Portrait" class="img__portrait"/>
                    <h1>{"Alexander Herlin"}</h1>
                </div>
            </div>
        }
    }
}
