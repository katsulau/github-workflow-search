const checkScript: string = 'Content Script Loaded'
console.log(checkScript);


enum WorkflowLoadStatus {
    NONE_TARGET,
    READY,
    LOADING,
    COMPLETED
}

function createWorkflowListLoader(
    document: Document
) {
    let workFlowLoadStatus: WorkflowLoadStatus
    // ロード対象があるか確認
    // const showMoreItemLink = document.getElementById("ActionList--showMoreItem");

    const showMoreItemLink = null
    if (showMoreItemLink === null) {
        workFlowLoadStatus = WorkflowLoadStatus.NONE_TARGET;
    } else {
        workFlowLoadStatus = WorkflowLoadStatus.READY;
    }

    return {
        getWorkFlowLoadStatus: () => {
            return workFlowLoadStatus;
        }
    };
}

const workflowListLoader = createWorkflowListLoader(document);
console.log(workflowListLoader.getWorkFlowLoadStatus());


// もしロード対象があれば読み込み処理を行う

// 読み込みが終わったかどうか確認する

// 終わったら、次の読み込みを行う

// 全てのロード処理を行う

// 全てのロード処理が完了したら、ステータスを変更する



// <li data-test-selector="workflows-show-more" src="/OpenAPITools/openapi-generator/actions/workflows_partial?fetch_required_workflows=false&amp;query=" pages="3" id="ActionList--showMoreItem" data-target="lazy-load-section.showMoreItem" data-action="click:lazy-load-section#submit" data-current-page="2" data-item-id="" data-view-component="true" class="ActionList-item">
// <a href="#" data-view-component="true" class="ActionList-content ActionList-content--visual16" data-turbo-frame="repo-content-turbo-frame">
// <span class="ActionList-item-label ">
// <span class="color-fg-accent">Show more workflows...</span>
//
// </span>
// </a></li>

// <li data-test-selector="workflows-show-more" src="/OpenAPITools/openapi-generator/actions/workflows_partial?fetch_required_workflows=false&amp;query=" pages="3" id="ActionList--showMoreItem" data-target="lazy-load-section.showMoreItem" data-action="click:lazy-load-section#submit" data-current-page="3" data-item-id="" data-view-component="true" class="ActionList-item" hidden="">
// <a href="#" data-view-component="true" class="ActionList-content ActionList-content--visual16" data-turbo-frame="repo-content-turbo-frame">
// <span class="ActionList-item-label ">
// <span class="color-fg-accent">Show more workflows...</span>
//
// </span>
// </a></li>